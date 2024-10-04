import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from 'jspsych';

interface SummarizeTextPluginTrial {
    questions: {
        prompt: string;
        name?: string;
        placeholder?: string;
        rows?: number;
        columns?: number;
        required?: boolean;
    }[];
    preamble?: string | null;
    randomize_question_order?: boolean;
    button_label?: string;
    autocomplete?: boolean;
}

const info = <const>{
    name: 'summarize-text',
    parameters: {
        questions: {
            type: ParameterType.COMPLEX,
            array: true,
            pretty_name: 'Questions',
            default: [],
            nested: {
                prompt: {
                    type: ParameterType.STRING,
                    pretty_name: 'Prompt',
                    default: '',
                },
                name: {
                    type: ParameterType.STRING,
                    pretty_name: 'Question Name',
                    default: '',
                },
                placeholder: {
                    type: ParameterType.STRING,
                    pretty_name: 'Placeholder',
                    default: '',
                },
                rows: {
                    type: ParameterType.INT,
                    pretty_name: 'Rows',
                    default: 1,
                },
                columns: {
                    type: ParameterType.INT,
                    pretty_name: 'Columns',
                    default: 40,
                },
                required: {
                    type: ParameterType.BOOL,
                    pretty_name: 'Required',
                    default: false,
                },
            },
        },
        preamble: {
            type: ParameterType.STRING,
            pretty_name: 'Preamble',
            default: null,
        },
        randomize_question_order: {
            type: ParameterType.BOOL,
            pretty_name: 'Randomize Question Order',
            default: false,
        },
        button_label: {
            type: ParameterType.STRING,
            pretty_name: 'Button label',
            default: 'Submit',
        },
        autocomplete: {
            type: ParameterType.BOOL,
            pretty_name: 'Allow Autocomplete',
            default: true,
        },
    },
};

class SummarizeTextPlugin implements JsPsychPlugin {
    static info = info;

    private jsPsych: JsPsych;

    constructor(jsPsych: JsPsych) {
        this.jsPsych = jsPsych;
    }

    trial(display_element: HTMLElement, trial: TrialType<SummarizeTextPluginTrial>) {
        for (const question of trial.questions) {
            question.rows = question.rows ?? 1;
            question.columns = question.columns ?? 40;
            question.value = question.value ?? "";
        }

        let html = '';

        // Show preamble text
        if (trial.preamble !== null) {
            html += `<div id="jspsych-summarize-text-preamble" class="jspsych-summarize-text-preamble">${trial.preamble}</div>`;
        }

        // Start form
        html += `<form id="jspsych-summarize-text-form" ${trial.autocomplete ? '' : 'autocomplete="off"'}>`;

        // Generate question order
        let question_order = trial.questions.map((_, i) => i);
        if (trial.randomize_question_order) {
            question_order = this.jsPsych.randomization.shuffle(question_order);
        }

        // Add questions
        question_order.forEach((index, i) => {
            const question = trial.questions[index];
            html += `<div id="jspsych-summarize-text-${index}" class="jspsych-summarize-text-question" style="margin: 2em 0em; max-width: 800px;">
                        <p class="jspsych-summarize-text">${question.prompt}</p>
                        <textarea id="input-${index}" name="#jspsych-summarize-text-response-${index}" data-name="${question.name}" 
                        cols="${question.columns}" rows="${question.rows}" ${i === 0 ? 'autofocus' : ''} ${question.required ? 'required' : ''}
                        placeholder="${question.placeholder}"></textarea>
                     </div>`;
        });

        // Add submit button
        html += `<input type="submit" id="jspsych-summarize-text-next" class="jspsych-btn" value="${trial.button_label}"></form>`;

        // Set HTML to display element
        display_element.innerHTML = html;

        const startTime = performance.now();

        display_element.querySelector('#jspsych-summarize-text-form')!.addEventListener('submit', (e: Event) => {
            e.preventDefault();

            // Measure response time
            const endTime = performance.now();
            const response_time = Math.round(endTime - startTime);

            // Collect responses
            const question_data: Record<string, string> = {};
            trial.questions.forEach((_, i) => {
                const response_element = display_element.querySelector(`#input-${i}`) as HTMLTextAreaElement;
                question_data[response_element.dataset['name'] ?? `Q${i}`] = response_element.value;
            });

            // Save trial data
            const trialdata = {
                rt: response_time,
                response: question_data,
            };

            display_element.innerHTML = '';
            this.jsPsych.finishTrial(trialdata);
        });
    }
}

export default SummarizeTextPlugin;

import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from 'jspsych';

interface SummarizedGraderPluginTrial {
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
    wordVecs: { [key: string]: number[] };
}

const info = <const>{
    name: 'summarized-grader',
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
        wordVecs: {
            type: ParameterType.OBJECT,
            pretty_name: 'Word Vectors',
            default: {},
        },
    },
};

class SummarizedGraderPlugin implements JsPsychPlugin {
    static info = info;

    private jsPsych: JsPsych;
    private question_data: any[] = [];

    constructor(jsPsych: JsPsych) {
        this.jsPsych = jsPsych;
    }

    trial(display_element: HTMLElement, trial: TrialType<SummarizedGraderPluginTrial>) {
        // Render questions
        let html = '';

        if (trial.preamble !== null) {
            html += `<div id="jspsych-summarized-grader-preamble" class="jspsych-summarized-grader-preamble">${trial.preamble}</div>`;
        }

        html += `<form id="jspsych-summarized-grader-form" ${trial.autocomplete ? '' : 'autocomplete="off"'}>`;
        
        let question_order = trial.questions.map((_, i) => i);
        if (trial.randomize_question_order) {
            question_order = this.jsPsych.randomization.shuffle(question_order);
        }

        question_order.forEach((index) => {
            const question = trial.questions[index];
            html += `<div id="jspsych-summarized-grader-${index}" class="jspsych-summarized-grader-question" style="margin: 2em 0em;">
                        <p class="jspsych-summarized-grader">${question.prompt}</p>
                        <textarea id="input-${index}" name="#jspsych-summarized-grader-response-${index}" 
                        cols="${question.columns}" rows="${question.rows}" 
                        placeholder="${question.placeholder}" ${question.required ? 'required' : ''}></textarea>
                     </div>`;
        });

        html += `<input type="submit" id="jspsych-summarized-grader-next" class="jspsych-btn" value="${trial.button_label}"></form>`;
        display_element.innerHTML = html;

        const startTime = performance.now();

        display_element.querySelector('#jspsych-summarized-grader-form')!.addEventListener('submit', (e: Event) => {
            e.preventDefault();

            const endTime = performance.now();
            const response_time = Math.round(endTime - startTime);

            const question_data: Record<string, string> = {};
            trial.questions.forEach((_, i) => {
                const response_element = display_element.querySelector(`#input-${i}`) as HTMLTextAreaElement;
                const response = response_element.value;
                const original_text = display_element.querySelector(`#jspsych-summarized-grader-${i}`)?.textContent ?? '';
                const similarity = this.getSimilarity(original_text, response, trial.wordVecs);

                question_data[`Q${i}`] = {
                    response,
                    similarity,
                    response_time,
                };
            });

            this.jsPsych.finishTrial({ response: question_data });
        });
    }

    getSimilarity(doc1: string, doc2: string, wordVecs: { [key: string]: number[] }): number {
        const cleanDoc1 = this.cleanInput(doc1, wordVecs);
        const cleanDoc2 = this.cleanInput(doc2, wordVecs);

        const doc1vec = this.averageVector(cleanDoc1, wordVecs);
        const doc2vec = this.averageVector(cleanDoc2, wordVecs);

        return this.getCosSim(doc1vec, doc2vec);
    }

    cleanInput(doc: string, wordVecs: { [key: string]: number[] }): string[] {
        const normalizedText = doc.toLowerCase().replace(/[\d\W_]+/g, ' ');
        return normalizedText.split(/\s+/).filter(word => wordVecs.hasOwnProperty(word));
    }

    averageVector(words: string[], wordVecs: { [key: string]: number[] }): number[] {
        const sumVector = new Array(300).fill(0);
        let count = 0;

        words.forEach(word => {
            if (wordVecs[word]) {
                count++;
                const vec = wordVecs[word];
                sumVector.forEach((_, index) => sumVector[index] += vec[index]);
            }
        });

        return count === 0 ? sumVector : sumVector.map(val => val / count);
    }

    getCosSim(vec1: number[], vec2: number[]): number {
        const dotProduct = vec1.reduce((sum, val, idx) => sum + val * vec2[idx], 0);
        const mag1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
        const mag2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));

        return dotProduct / (mag1 * mag2);
    }
}

export default SummarizedGraderPlugin;

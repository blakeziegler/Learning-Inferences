"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspsych_1 = require("jspsych");
var info = {
    name: 'summarized-grader',
    parameters: {
        questions: {
            type: jspsych_1.ParameterType.COMPLEX,
            array: true,
            pretty_name: 'Questions',
            default: [],
            nested: {
                prompt: {
                    type: jspsych_1.ParameterType.STRING,
                    pretty_name: 'Prompt',
                    default: '',
                },
                name: {
                    type: jspsych_1.ParameterType.STRING,
                    pretty_name: 'Question Name',
                    default: '',
                },
                placeholder: {
                    type: jspsych_1.ParameterType.STRING,
                    pretty_name: 'Placeholder',
                    default: '',
                },
                rows: {
                    type: jspsych_1.ParameterType.INT,
                    pretty_name: 'Rows',
                    default: 1,
                },
                columns: {
                    type: jspsych_1.ParameterType.INT,
                    pretty_name: 'Columns',
                    default: 40,
                },
                required: {
                    type: jspsych_1.ParameterType.BOOL,
                    pretty_name: 'Required',
                    default: false,
                },
            },
        },
        preamble: {
            type: jspsych_1.ParameterType.STRING,
            pretty_name: 'Preamble',
            default: null,
        },
        randomize_question_order: {
            type: jspsych_1.ParameterType.BOOL,
            pretty_name: 'Randomize Question Order',
            default: false,
        },
        button_label: {
            type: jspsych_1.ParameterType.STRING,
            pretty_name: 'Button label',
            default: 'Submit',
        },
        autocomplete: {
            type: jspsych_1.ParameterType.BOOL,
            pretty_name: 'Allow Autocomplete',
            default: true,
        },
        wordVecs: {
            type: jspsych_1.ParameterType.OBJECT,
            pretty_name: 'Word Vectors',
            default: {},
        },
    },
};
var SummarizedGraderPlugin = /** @class */ (function () {
    function SummarizedGraderPlugin(jsPsych) {
        this.question_data = [];
        this.jsPsych = jsPsych;
    }
    SummarizedGraderPlugin.prototype.trial = function (display_element, trial) {
        var _this = this;
        // Render questions
        var html = '';
        if (trial.preamble !== null) {
            html += "<div id=\"jspsych-summarized-grader-preamble\" class=\"jspsych-summarized-grader-preamble\">".concat(trial.preamble, "</div>");
        }
        html += "<form id=\"jspsych-summarized-grader-form\" ".concat(trial.autocomplete ? '' : 'autocomplete="off"', ">");
        var question_order = trial.questions.map(function (_, i) { return i; });
        if (trial.randomize_question_order) {
            question_order = this.jsPsych.randomization.shuffle(question_order);
        }
        question_order.forEach(function (index) {
            var question = trial.questions[index];
            html += "<div id=\"jspsych-summarized-grader-".concat(index, "\" class=\"jspsych-summarized-grader-question\" style=\"margin: 2em 0em;\">\n                        <p class=\"jspsych-summarized-grader\">").concat(question.prompt, "</p>\n                        <textarea id=\"input-").concat(index, "\" name=\"#jspsych-summarized-grader-response-").concat(index, "\" \n                        cols=\"").concat(question.columns, "\" rows=\"").concat(question.rows, "\" \n                        placeholder=\"").concat(question.placeholder, "\" ").concat(question.required ? 'required' : '', "></textarea>\n                     </div>");
        });
        html += "<input type=\"submit\" id=\"jspsych-summarized-grader-next\" class=\"jspsych-btn\" value=\"".concat(trial.button_label, "\"></form>");
        display_element.innerHTML = html;
        var startTime = performance.now();
        display_element.querySelector('#jspsych-summarized-grader-form').addEventListener('submit', function (e) {
            e.preventDefault();
            var endTime = performance.now();
            var response_time = Math.round(endTime - startTime);
            var question_data = {};
            trial.questions.forEach(function (_, i) {
                var _a, _b;
                var response_element = display_element.querySelector("#input-".concat(i));
                var response = response_element.value;
                var original_text = (_b = (_a = display_element.querySelector("#jspsych-summarized-grader-".concat(i))) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
                var similarity = _this.getSimilarity(original_text, response, trial.wordVecs);
                question_data["Q".concat(i)] = {
                    response: response,
                    similarity: similarity,
                    response_time: response_time,
                };
            });
            _this.jsPsych.finishTrial({ response: question_data });
        });
    };
    SummarizedGraderPlugin.prototype.getSimilarity = function (doc1, doc2, wordVecs) {
        var cleanDoc1 = this.cleanInput(doc1, wordVecs);
        var cleanDoc2 = this.cleanInput(doc2, wordVecs);
        var doc1vec = this.averageVector(cleanDoc1, wordVecs);
        var doc2vec = this.averageVector(cleanDoc2, wordVecs);
        return this.getCosSim(doc1vec, doc2vec);
    };
    SummarizedGraderPlugin.prototype.cleanInput = function (doc, wordVecs) {
        var normalizedText = doc.toLowerCase().replace(/[\d\W_]+/g, ' ');
        return normalizedText.split(/\s+/).filter(function (word) { return wordVecs.hasOwnProperty(word); });
    };
    SummarizedGraderPlugin.prototype.averageVector = function (words, wordVecs) {
        var sumVector = new Array(300).fill(0);
        var count = 0;
        words.forEach(function (word) {
            if (wordVecs[word]) {
                count++;
                var vec_1 = wordVecs[word];
                sumVector.forEach(function (_, index) { return sumVector[index] += vec_1[index]; });
            }
        });
        return count === 0 ? sumVector : sumVector.map(function (val) { return val / count; });
    };
    SummarizedGraderPlugin.prototype.getCosSim = function (vec1, vec2) {
        var dotProduct = vec1.reduce(function (sum, val, idx) { return sum + val * vec2[idx]; }, 0);
        var mag1 = Math.sqrt(vec1.reduce(function (sum, val) { return sum + val * val; }, 0));
        var mag2 = Math.sqrt(vec2.reduce(function (sum, val) { return sum + val * val; }, 0));
        return dotProduct / (mag1 * mag2);
    };
    SummarizedGraderPlugin.info = info;
    return SummarizedGraderPlugin;
}());
exports.default = SummarizedGraderPlugin;

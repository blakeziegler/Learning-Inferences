var jsPsychSurveyMultiChoiceFB = (function (jspsych) {
    'use strict';

    const info = {
        name: "survey-multi-choice-fb",
        parameters: {
            /** Array containing one or more objects with parameters for the question(s) that should be shown on the page. */
            questions: {
                type: jspsych.ParameterType.COMPLEX,
                array: true,
                pretty_name: "Questions",
                nested: {
                    /** Question prompt. */
                    prompt: {
                        type: jspsych.ParameterType.HTML_STRING,
                        pretty_name: "Prompt",
                        default: undefined,
                    },
                    /** Array of multiple choice options for this question. */
                    options: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: "Options",
                        array: true,
                        default: undefined,
                    },
                    /** Correct response. */
                    correct: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: "Correct",
                        default: undefined,
                    },
                    /** Feedback on incorrect. */
                    feedback_incorrect: {
                        type: jspsych.ParameterType.HTML_STRING,
                        pretty_name: "Incorrect Feedback",
                        default: "",
                    },
                    /** Feedback on incorrect. */
                    allow_incorrect: {
                        type: jspsych.ParameterType.HTML_STRING,
                        pretty_name: "Allow Incorrect Response",
                        default: false,
                    },
                    /** Feedback on correct. */
                    feedback_correct: {
                        type: jspsych.ParameterType.HTML_STRING,
                        pretty_name: "Correct Feedback",
                        default: " Correct!",
                    },
                    /** Whether or not a response to this question must be given in order to continue. */
                    required: {
                        type: jspsych.ParameterType.BOOL,
                        pretty_name: "Required",
                        default: false,
                    },
                    /** If true, then the question will be centered and options will be displayed horizontally. */
                    horizontal: {
                        type: jspsych.ParameterType.BOOL,
                        pretty_name: "Horizontal",
                        default: false,
                    },
                    /** Name of the question in the trial data. If no name is given, the questions are named Q0, Q1, etc. */
                    name: {
                        type: jspsych.ParameterType.STRING,
                        pretty_name: "Question Name",
                        default: "",
                    },
                },
            },
            /** If true, the order of the questions in the 'questions' array will be randomized. */
            randomize_question_order: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Randomize Question Order",
                default: false,
            },
            /** If true, the order of the response options in the 'questions' array will be randomized. */
            randomize_response_order: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Randomize Response Option Order",
                default: true,
            },
            /** HTML-formatted string to display at top of the page above all of the questions. */
            preamble: {
                type: jspsych.ParameterType.HTML_STRING,
                pretty_name: "Preamble",
                default: null,
            },
            /** Label of the button to submit responses. */
            button_label: {
                type: jspsych.ParameterType.STRING,
                pretty_name: "Button label",
                default: "Continue",
            },
            /** Setting this to true will enable browser auto-complete or auto-fill for the form. */
            autocomplete: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Allow autocomplete",
                default: false,
            },
            /** Setting this to true will prompt respondents to summarize the questions at the end */
            ask_for_summary: {
                type: jspsych.ParameterType.BOOL,
                pretty_name: "Ask for a summary after the questions",
                default: false,
            }
        },
    };
    /**
     * **survey-multi-choice**
     *
     * jsPsych plugin for presenting multiple choice survey questions
     *
     * @author Shane Martin
     * @see {@link https://www.jspsych.org/plugins/jspsych-survey-multi-choice/ survey-multi-choice plugin documentation on jspsych.org}
     */
    class SurveyMultiChoiceFBPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        trial(display_element, trial) {
            var plugin_id_name = "jspsych-survey-multi-choice";
            var html = "";
            // inject CSS for trial
            html += '<style id="jspsych-survey-multi-choice-css">';
            html +=
                ".jspsych-survey-multi-choice-question { margin-top: 2em; margin-bottom: 2em; text-align: left; }" +
                ".jspsych-survey-multi-choice-text span.required {color: darkred;}" +
                ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-text {  text-align: center;}" +
                ".jspsych-survey-multi-choice-option { line-height: 2; }" +
                ".jspsych-survey-multi-choice-horizontal .jspsych-survey-multi-choice-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}" +
                "label.jspsych-survey-multi-choice-text input[type='radio'] {margin-right: 1em;}";
            html += "</style>";
            // show preamble text
            if (trial.preamble !== null) {
                html +=
                    '<div id="jspsych-survey-multi-choice-preamble" class="jspsych-survey-multi-choice-preamble">' +
                    trial.preamble +
                    "</div>";
            }
            // form element
            if (trial.autocomplete) {
                html += '<form id="jspsych-survey-multi-choice-form">';
            }
            else {
                html += '<form id="jspsych-survey-multi-choice-form" autocomplete="off">';
            }
            // generate question order. this is randomized here as opposed to randomizing the order of trial.questions
            // so that the data are always associated with the same question regardless of order
            var question_order = [];
            for (var i = 0; i < trial.questions.length; i++) {
                question_order.push(i);
            }
            if (trial.randomize_question_order) {
                question_order = this.jsPsych.randomization.shuffle(question_order);
            }
            // add multiple-choice questions
            for (var i = 0; i < trial.questions.length; i++) {
                // get question based on question_order
                var question = trial.questions[question_order[i]];
                var question_id = question_order[i];
                // create question container
                var question_classes = ["jspsych-survey-multi-choice-question"];
                if (question.horizontal) {
                    question_classes.push("jspsych-survey-multi-choice-horizontal");
                }
                if (i == 0) {
                    question_classes.push("unobfuscated");
                    var answerDisabled = "";
                } else {
                    question_classes.push("obfuscated");
                    var answerDisabled = "disabled";
                }
                html +=
                    '<div id="jspsych-survey-multi-choice-' +
                    question_id +
                    '" class="' +
                    question_classes.join(" ") +
                    '"  data-name="' +
                    question.name +
                    '">';
                // add question text
                html += '<p class="jspsych-survey-multi-choice-text survey-multi-choice">' + question.prompt;
                /* if (question.required) {
                    html += "<span class='required'>*</span>";
                } */
                html += "</p>";
                if (trial.randomize_response_order) {
                    question.options = this.jsPsych.randomization.shuffle(question.options);
                }
                // create option radio buttons
                for (var j = 0; j < question.options.length; j++) {
                    // add label and question text
                    var option_id_name = "jspsych-survey-multi-choice-option-" + question_id + "-" + j;
                    var input_name = "jspsych-survey-multi-choice-response-" + question_id;
                    var input_id = "jspsych-survey-multi-choice-response-" + question_id + "-" + j;
                    var required_attr = question.required ? "required" : "";
                    if (question.options[j] == question.correct) {
                        var correctflag = " flag";
                    } else {
                        var correctflag = "";
                    }
                    // add radio button container
                    html += '<div id="' + option_id_name + '" class="jspsych-survey-multi-choice-option">';
                    html += '<label class="jspsych-survey-multi-choice-text' + correctflag + '" for="' + input_id + '">';
                    html +=
                        '<input type="radio" name="' +
                        input_name +
                        '" id="' +
                        input_id +
                        '" value="' +
                        question.options[j] +
                        '" ' +
                        answerDisabled +
                        ' ' +
                        required_attr +
                        "></input>";
                    html += question.options[j] + "</label>";
                    html += "</div>";
                }
                // add an answer button
                html += '<div id="jspsych-quiz-multi-choice-button-' + question_id + '" style="margin-block-start: 1em; margin-block-end: 1em;">' +
                    '<input type="button" id="jspsych-survey-multi-choice-button-' +
                    question_id + '" class="jspsych-btn" value="Answer" ' + answerDisabled + ' onclick="checkItMC(' + question_id + ',' + question.allow_incorrect + ',&quot;' + question.name + '&quot;,' + trial.questions.length + ',&quot;' + question.feedback_correct + '&quot;,&quot;' + question.feedback_incorrect + '&quot;,' + trial.ask_for_summary + ')"></input></div>';
                // create feedback div
                html += '<div id="jspsych-quiz-multi-choice-feedback-' + question_id + '"><p>&nbsp;</p></div>';
                // close the question
                html += "</div>";
            }
            // ask for a summary
            if (trial.ask_for_summary) {
                html +=
                    '<div id="jspsych-summarize-text-X" class="jspsych-summarize-text-question obfuscated" style="margin: 2em 0em; max-width: 800px; text-align: justify;">';
                html += '<p class="jspsych-summarize-text">Summarize the main ideas in the questions and answers above.</p>';
                var autofocus = i == 0 ? "autofocus" : "";
                // container for textarea
                html += '<div id="input-container-X" class="input-container" style="width: 100%; max-width: 100%;">';
                html += '<textarea id="input-X" name="#jspsych-summarize-text-response-X" cols=40 rows="5" ' +
                    autofocus + ' onkeydown="if(event.keyCode == 13 && !event.shiftKey) {sumCheckIt(' + trial.questions.length + '); event.preventDefault();}" disabled="true"></textarea>';
                html += '<button type="button" id="submit-X" class="submit-btn" onClick = "sumCheckIt(' + trial.questions.length + ');" disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/></svg></button>';
                html += "</div>";
                html += '<div id="response-X" class="summarize-response">Explain the questions and answers in your own words</div>';
                html += "</div>";
            }
            // add submit button
            html +=
                '<input type="submit" id="' +
                plugin_id_name +
                '-next" class="' +
                plugin_id_name +
                ' jspsych-btn"' +
                (trial.button_label ? ' value="' + trial.button_label + '"' : "") +
                ' disabled="true"></input>';
            html += "</form>";
            // render
            display_element.innerHTML = html;
            document.querySelector("form").addEventListener("submit", (event) => {
                event.preventDefault();
                // measure response time
                var endTime = performance.now();
                var response_time = Math.round(endTime - startTime);
                // create object to hold responses
                // save data
                var trial_data = {
                    rt: response_time,
                    response: question_data
                };
                display_element.innerHTML = "";
                // next trial
                this.jsPsych.finishTrial(trial_data);
            });
            var startTime = performance.now();
        }
    }
    SurveyMultiChoiceFBPlugin.info = info;

    return SurveyMultiChoiceFBPlugin;

})(jsPsychModule);

var question_data = new Array();

function getResponsePosition(q, resp) {
    var parentDiv = document.querySelector("#jspsych-survey-multi-choice-" + q);
    var childDivs = parentDiv.querySelectorAll('label');
    for (let i = 0; i < childDivs.length; i++) {
        // Check if the child div's innerText matches the response
        if (childDivs[i].innerText.includes(resp)) {
            return i + 1; // Return the index of the first matching child div
        }
    }
}

function addDataMC(qname, qindex, qprompt, qresponse, qtime, qeval) {
    // Plan to collect
    // . name of question
    // - prompt
    // . response
    // - response_position
    // . timestamp
    // . response evaluation
    // and then add it to question_data
    if (qname == "summary") {
        var qresponsepos = 999;
    } else {
        var qresponsepos = getResponsePosition(qindex, qresponse);
    }
    var thisData = {
        'name': qname,
        'question_index': qindex,
        'prompt': qprompt,
        'response': qresponse,
        'response_position': qresponsepos,
        'timestamp': qtime,
        'evaluation': qeval
    };
    question_data.push(thisData);
}

function checkItMC(q, allow_incorrect, q_name, n_questions, fb_correct, fb_incorrect, ask_for_summary) {
    rtime = performance.now();
    if (allow_incorrect) {
        thisQuestion = document.querySelector("#jspsych-survey-multi-choice-" + q);
        thisPrompt = document.querySelector("#jspsych-survey-multi-choice-" + q).getElementsByClassName("survey-multi-choice")[0].innerHTML;
        val = thisQuestion.querySelector("input[type=radio]:checked").value;
        thisCorrectAnswer = document.querySelector("#jspsych-survey-multi-choice-" + q).getElementsByClassName("flag")[0].querySelector('input[type="radio"]').value;
        if ((q + 1) == n_questions) { // this was the last question
            // disable this question's answer button
            // document.getElementById("jspsych-quiz-multi-choice-button-" + q).innerHTML += ' Correct!';
            document.getElementById("jspsych-survey-multi-choice-button-" + q).disabled = true;
            // disable this question's radio buttons
            x = document.getElementsByName("jspsych-survey-multi-choice-response-" + (q));
            for (i = 0; i < x.length; i++) x[i].disabled = true;
            if (ask_for_summary) { // enable the summary text box
                document.getElementById("input-X").disabled = false;
                document.getElementById("submit-X").disabled = false;
                document.getElementById("input-X").classList.add('active');
                document.getElementById("jspsych-summarize-text-X").classList.remove('obfuscated');
                document.getElementById("input-X").classList.remove('active');
                document.getElementById("jspsych-summarize-text-X").classList.add('unobfuscated');
                document.getElementById("input-X").focus();
            } else { // enable the submit button
                document.getElementById("jspsych-survey-multi-choice-next").disabled = false;
            }
        } else { // there are still more questions
            // unobfuscate the next question
            document.getElementById("jspsych-survey-multi-choice-" + (q + 1)).classList.add('unobfuscated');
            document.getElementById("jspsych-survey-multi-choice-" + (q + 1)).classList.remove('obfuscated');
            // enable the next question's radio buttons
            x = document.getElementsByName("jspsych-survey-multi-choice-response-" + (q + 1));
            for (i = 0; i < x.length; i++) x[i].disabled = false;
            // enable the next question's answer button
            document.getElementById("jspsych-survey-multi-choice-button-" + (q + 1)).disabled = false;
        }
        // disable this question's answer button
        // document.getElementById("jspsych-quiz-multi-choice-button-" + q).innerHTML += ' Correct!';
        document.getElementById("jspsych-survey-multi-choice-button-" + q).disabled = true;
        // disable this question's radio buttons
        x = document.getElementsByName("jspsych-survey-multi-choice-response-" + (q));
        for (i = 0; i < x.length; i++) x[i].disabled = true;
        if (val == thisCorrectAnswer) { // the answer was correct 
            addDataMC(q_name, q, thisPrompt, val, rtime, "correct");
        } else {
            addDataMC(q_name, q, thisPrompt, val, rtime, "incorrect");
        }
    } else {
        thisQuestion = document.querySelector("#jspsych-survey-multi-choice-" + q);
        thisPrompt = document.querySelector("#jspsych-survey-multi-choice-" + q).getElementsByClassName("survey-multi-choice")[0].innerHTML;
        thisCorrectAnswer = document.querySelector("#jspsych-survey-multi-choice-" + q).getElementsByClassName("flag")[0].querySelector('input[type="radio"]').value;
        thisFeedback = document.querySelector("#jspsych-quiz-multi-choice-feedback-" + q);
        if (thisQuestion.querySelector("input[type=radio]:checked") !== null) {
            val = thisQuestion.querySelector("input[type=radio]:checked").value;
            if (val == thisCorrectAnswer) { // the answer was correct
                if (fb_correct === "") {
                    thisFeedback.innerHTML = "<p>&nbsp;</p>";
                } else {
                    thisFeedback.innerHTML = "<p>" + fb_correct + "</p>";
                }
                if ((q + 1) == n_questions) { // this was the last question
                    // disable this question's answer button
                    // document.getElementById("jspsych-quiz-multi-choice-button-" + q).innerHTML += ' Correct!';
                    document.getElementById("jspsych-survey-multi-choice-button-" + q).disabled = true;
                    // disable this question's radio buttons
                    x = document.getElementsByName("jspsych-survey-multi-choice-response-" + (q));
                    for (i = 0; i < x.length; i++) x[i].disabled = true;
                    if (ask_for_summary) { // enable the summary text box
                        document.getElementById("input-X").disabled = false;
                        document.getElementById("submit-X").disabled = false;
                        document.getElementById("input-X").classList.add('active');
                        document.getElementById("jspsych-summarize-text-X").classList.remove('obfuscated');
                        document.getElementById("input-X").classList.remove('active');
                        document.getElementById("jspsych-summarize-text-X").classList.add('unobfuscated');
                        document.getElementById("input-X").focus();
                    } else { // enable the submit button
                        document.getElementById("jspsych-survey-multi-choice-next").disabled = false;
                    }
                } else { // there're still other questions
                    // unobfuscate the next question
                    document.getElementById("jspsych-survey-multi-choice-" + (q + 1)).classList.add('unobfuscated');
                    document.getElementById("jspsych-survey-multi-choice-" + (q + 1)).classList.remove('obfuscated');
                    // enable the next question's radio buttons
                    x = document.getElementsByName("jspsych-survey-multi-choice-response-" + (q + 1));
                    for (i = 0; i < x.length; i++) x[i].disabled = false;
                    // enable the next question's answer button
                    document.getElementById("jspsych-survey-multi-choice-button-" + (q + 1)).disabled = false;
                    // disable this question's answer button
                    // document.getElementById("jspsych-quiz-multi-choice-button-" + q).innerHTML += ' Correct!';
                    document.getElementById("jspsych-survey-multi-choice-button-" + q).disabled = true;
                    // disable this question's radio buttons
                    x = document.getElementsByName("jspsych-survey-multi-choice-response-" + (q));
                    for (i = 0; i < x.length; i++) x[i].disabled = true;
                }
                addDataMC(q_name, q, thisPrompt, val, rtime, "correct");
            } else { // the answer was incorrect
                if (fb_incorrect === "") {
                    thisFeedback.innerHTML = "<p>&nbsp;</p>";
                } else {
                    thisFeedback.innerHTML = "<p>" + fb_incorrect + "</p>";
                }
                addDataMC(q_name, q, thisPrompt, val, rtime, "incorrect");
            }
        }
    }
}

function getSimilarity(doc1, doc2) {
    // send documents for cleaning
    doc1 = cleanInput(doc1);
    doc2 = cleanInput(doc2);
    // get the average vector of each document
    doc1vec = averageVector(doc1)
    doc2vec = averageVector(doc2)
    // calculate cosine similarity
    var cosSim = getCosSim(doc1vec, doc2vec);
    return cosSim;
}

function getCosSim(f1, f2) {
    return Math.abs(f1.reduce(function (sum, a, idx) {
        return sum + a * f2[idx];
    }, 0) / (mag(f1) * mag(f2))); //magnitude is 1 for all feature vectors
}

function mag(a) {
    return Math.sqrt(a.reduce(function (sum, val) {
        return sum + val * val;
    }, 0));
}

function cleanInput(doc) {
    // Normalize the text: lower case, remove punctuation and numbers
    var normalizedText = doc.toLowerCase().replace(/[\d\W_]+/g, ' ');
    // Split text into words
    var words = normalizedText.split(/\s+/);
    // Filter words to include only those present in the wordVecs object
    var words = words.filter(word => wordVecs.hasOwnProperty(word));
    return words;
}

function averageVector(words) {
    // Initialize an array of zeros for the sum of vectors
    let sumVector = new Array(300).fill(0);

    // Sum vectors for each word
    let count = 0;
    words.forEach(word => {
        if (wordVecs.hasOwnProperty(word)) {
            count++;
            const vec = wordVecs[word];
            sumVector = sumVector.map((val, index) => val + vec[index]);
        }
    });

    // If no words had vectors, return an array of zeros
    if (count === 0) {
        return sumVector;
    }

    // Calculate the average vector
    const averageVector = sumVector.map(val => val / count);
    return averageVector;
}

function sumCheckIt(n_questions) {
    rtime = performance.now();
    response = document.getElementById("input-X").value;
    originaltext = "";
    for (var q = 0; q < n_questions; q++) {
        originaltext += document.querySelector("#jspsych-survey-multi-choice-" + q).getElementsByClassName("survey-multi-choice")[0].innerHTML;
        originaltext += ' ';
        originaltext += document.querySelector("#jspsych-survey-multi-choice-" + q).getElementsByClassName("flag")[0].querySelector('input[type="radio"]').value;
        originaltext += ' ';
    } 
    sim = getSimilarity(originaltext, response);
    simPct = Math.round(sim * 100);
    // Start checking
    if (response.length < 10) { // Character length
        addData("summary", 999, "Write a brief summary", response, rtime, "error too short ("+simPct+"%sim)");
        document.getElementById("response-X").innerHTML = "Please provide a longer response";
        document.getElementById("response-X").style.color = "red";
        document.getElementById("input-X").classList.add('error');
        setTimeout(function () {
            document.getElementById("input-X").classList.remove('error');
        }, 300);
    }
    else if (response.trim().split(/\s+/).length < 4) { // Number of words
        addData("summary", 999, "Write a brief summary", response, rtime, "error too short ("+simPct+"%sim)");
        document.getElementById("response-X").innerHTML = "Please provide a longer response";
        document.getElementById("response-X").style.color = "red";
        document.getElementById("input-X").classList.add('error');
        setTimeout(function () {
            document.getElementById("input-X").classList.remove('error');
        }, 300);
    } else if (!sim) { // No matching words
        addData("summary", 999, "Write a brief summary", response, rtime, "error no real words ("+simPct+"%sim)");
        document.getElementById("response-X").innerHTML = "Please respond in English words";
        document.getElementById("response-X").style.color = "red";
        document.getElementById("input-X").classList.add('error');
        setTimeout(function () {
            document.getElementById("input-X").classList.remove('error');
        }, 300);
    } else {
        if (simPct < 80) {
            addData("summary", 999, "Write a brief summary", response, rtime, "error low similarity ("+simPct+"%sim)");
            // document.getElementById("response-X").innerHTML = "Current similarity is " + simPct + "%. Please update your response to reach 80% similarity.";
            document.getElementById("response-X").innerHTML = "Your summary is missing some key elements. Please be sure to summarize the main ideas in your own words.";
            document.getElementById("response-X").style.color = "red";
            document.getElementById("input-X").classList.add('error');
        } else {
            addData("summary", 999, "Write a brief summary", response, rtime, "success ("+simPct+"%sim)");
            document.getElementById("response-X").innerHTML = "Similarity: " + simPct + "%";
            document.getElementById("response-X").style.color = "green";
            document.getElementById("input-X").disabled = true;
            document.getElementById("submit-X").disabled = true;
            document.getElementById("jspsych-survey-multi-choice-next").disabled = false; // enable the submit button
            document.getElementById("jspsych-survey-multi-choice-next").focus(); // give focus to the submit button
        }
    }
}
var jsPsychSurveyText = (function (jspsych) {
  'use strict';

  const info = {
      name: "survey-text",
      parameters: {
          questions: {
              type: jspsych.ParameterType.COMPLEX,
              array: true,
              pretty_name: "Questions",
              default: undefined,
              nested: {
                  /** Question prompt. */
                  prompt: {
                      type: jspsych.ParameterType.HTML_STRING,
                      pretty_name: "Prompt",
                      default: undefined,
                  },
                  /** Placeholder text in the response text box. */
                  placeholder: {
                      type: jspsych.ParameterType.STRING,
                      pretty_name: "Placeholder",
                      default: "",
                  },
                  /** The number of rows for the response text box. */
                  rows: {
                      type: jspsych.ParameterType.INT,
                      pretty_name: "Rows",
                      default: 1,
                  },
                  /** The number of columns for the response text box. */
                  columns: {
                      type: jspsych.ParameterType.INT,
                      pretty_name: "Columns",
                      default: 40,
                  },
                  /** Whether or not a response to this question must be given in order to continue. */
                  required: {
                      type: jspsych.ParameterType.BOOL,
                      pretty_name: "Required",
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
      },
  };
  /**
   * **survey-text**
   *
   * jsPsych plugin for free text response survey questions
   *
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-survey-text/ survey-text plugin documentation on jspsych.org}
   */
  class SurveyTextPlugin {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
          for (var i = 0; i < trial.questions.length; i++) {
              if (typeof trial.questions[i].rows == "undefined") {
                  trial.questions[i].rows = 1;
              }
          }
          for (var i = 0; i < trial.questions.length; i++) {
              if (typeof trial.questions[i].columns == "undefined") {
                  trial.questions[i].columns = 40;
              }
          }
          for (var i = 0; i < trial.questions.length; i++) {
              if (typeof trial.questions[i].value == "undefined") {
                  trial.questions[i].value = "";
              }
          }
          var html = "";
          // show preamble text
          if (trial.preamble !== null) {
              html +=
                  '<div id="jspsych-survey-text-preamble" class="jspsych-survey-text-preamble">' +
                      trial.preamble +
                      "</div>";
          }
          // start form
          if (trial.autocomplete) {
              html += '<form id="jspsych-survey-text-form">';
          }
          else {
              html += '<form id="jspsych-survey-text-form" autocomplete="off">';
          }
          // generate question order
          var question_order = [];
          for (var i = 0; i < trial.questions.length; i++) {
              question_order.push(i);
          }
          if (trial.randomize_question_order) {
              question_order = this.jsPsych.randomization.shuffle(question_order);
          }
          // add questions
          for (var i = 0; i < trial.questions.length; i++) {
              var question = trial.questions[question_order[i]];
              var question_index = question_order[i];
			  if (i == 0) {
				  html +=
                  '<div id="jspsych-survey-text-' +
                      question_index +
                      '" class="jspsych-survey-text-question unobfuscated" style="margin: 2em 0em; max-width: 800px; text-align: justify;">';
			  } else {
				  html +=
                  '<div id="jspsych-survey-text-' +
                      question_index +
                      '" class="jspsych-survey-text-question obfuscated" style="margin: 2em 0em; max-width: 800px; text-align: justify;">';
			  }

              html += '<p class="jspsych-survey-text">' + question.prompt + "</p>";
              var autofocus = i == 0 ? "autofocus" : "";
              var req = question.required ? "required" : "";
			  // container for textarea
			  html += '<div id="input-container-' + question_index + '" class="input-container" style="width: 100%; max-width: 100%;">';
              if (i == 0) {
                  html +=
                      '<textarea id="input-' +
                          question_index +
                          '" name="#jspsych-survey-text-response-' +
                          question_index +
                          '" data-name="' +
                          question.name +
                          '" cols="' +
                          question.columns +
                          '" rows="' +
                          question.rows +
                          '" ' +
                          autofocus +
                          " " +
                          req +
                          ' placeholder="' +
                          question.placeholder +
                          '" onkeydown="if(event.keyCode == 13 && !event.shiftKey) {checkIt('+question_index+'); event.preventDefault();}" class="active"></textarea>';
				  html += '<button type="button" id="submit-'+question_index+'" class="submit-btn" onClick = "checkIt('+question_index+');"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/></svg></button>';
              }	
			  else {
                  html +=
                      '<textarea id="input-' +
                          question_index +
                          '" name="#jspsych-survey-text-response-' +
                          question_index +
                          '" data-name="' +
                          question.name +
                          '" cols="' +
                          question.columns +
                          '" rows="' +
                          question.rows +
                          '" ' +
                          autofocus +
                          " " +
                          req +
                          ' placeholder="' +
                          question.placeholder +
                          '" onkeydown="if(event.keyCode == 13 && !event.shiftKey) {checkIt('+question_index+'); event.preventDefault();}" disabled="true"></textarea>';
				  html += '<button type="button" id="submit-'+question_index+'" class="submit-btn" onClick = "checkIt('+question_index+');" disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16"><path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0"/></svg></button>';
              }
			  html += "</div>";
			  html += '<div id="response-'+question_index+'" class="paraphrase-response">Paraphrase in the box above</div>';
              html += "</div>";
          }
          // add submit button
          html +=
              '<input type="submit" id="jspsych-survey-text-next" class="jspsych-btn jspsych-survey-text" value="' +
                  trial.button_label +
                  '" disabled="true"></input><p></p>';
          html += "</form>";
          display_element.innerHTML = html;
          // backup in case autofocus doesn't work
          display_element.querySelector("#input-" + question_order[0]).focus();
          display_element.querySelector("#jspsych-survey-text-form").addEventListener("submit", (e) => {
              e.preventDefault();
              // measure response time
              var endTime = performance.now();
              var response_time = Math.round(endTime - startTime);
              // save data
              var trialdata = {
                  rt: response_time,
                  response: question_data,
              };
              display_element.innerHTML = "";
              // next trial
              this.jsPsych.finishTrial(trialdata);
          });
          var startTime = performance.now();
      }
  }
  SurveyTextPlugin.info = info;

  return SurveyTextPlugin;

})(jsPsychModule);

var question_data = new Array();

function getSimilarity(doc1,doc2) {
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


function addData(qname,qresponse,qtime,qscore,qeval) {
	// Plan to collect
	// . name of question
	// . response
	// . timestamp
	// . similarity score
	// . response evaluation
	// and then add it to question_data
	var thisData = {'name':qname,
			    	'response':qresponse,
					'timestamp':qtime,
			    	'similarity':qscore,
			    	'evaluation':qeval};
	question_data.push(thisData);
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

function checkIt(q) {
  thisq = q;
  nextq = q+1;
  response = document.getElementById("input-"+thisq).value;
  rtime = performance.now();
  originaltext = document.getElementById("jspsych-survey-text-"+thisq).textContent;
  sim = getSimilarity(originaltext,response);
  simPct = Math.round(sim * 100);
  // Start checking
  if (response.length < 10) { // Character length
	  addData(document.getElementById("input-"+thisq).attributes["data-name"].value,response,rtime,sim,"error too short");
	  document.getElementById("response-"+thisq).innerHTML = "Please provide a longer response";
	  document.getElementById("response-"+thisq).style.color="red";
	  document.getElementById("input-"+thisq).classList.add('error');
	  setTimeout(function() {
		  document.getElementById("input-"+thisq).classList.remove('error');
	  }, 300);
  } 
  else if (response.trim().split(/\s+/).length < 4) { // Number of words
	  addData(document.getElementById("input-"+thisq).attributes["data-name"].value,response,rtime,sim,"error too-short");
	  document.getElementById("response-"+thisq).innerHTML = "Please provide a longer response";
	  document.getElementById("response-"+thisq).style.color="red";
	  document.getElementById("input-"+thisq).classList.add('error');
	  setTimeout(function() {
		  document.getElementById("input-"+thisq).classList.remove('error');
	  }, 300);
  } else {
	  if (simPct < 80) {
		  addData(document.getElementById("input-"+thisq).attributes["data-name"].value,response,rtime,sim,"error low similarity");
		  document.getElementById("response-"+thisq).innerHTML = "Current paraphrase similarity is " + simPct + "%. Please update your response to reach 80% similarity.";
		  document.getElementById("response-"+thisq).style.color="red";
	      document.getElementById("input-"+thisq).classList.add('error');
	  } else {
		  addData(document.getElementById("input-"+thisq).attributes["data-name"].value,response,rtime,sim,"pass");
		  document.getElementById("response-"+thisq).innerHTML = "Paraphrase similarity: " + simPct + "%";
		  document.getElementById("response-"+thisq).style.color="green";
		  document.getElementById("input-"+thisq).disabled = true;
		  document.getElementById("submit-"+thisq).disabled = true;
		  if (document.getElementById("jspsych-survey-text-"+nextq) == null) { // this was the last textarea
			document.getElementById("jspsych-survey-text-next").disabled = false; // enable the submit button
			document.getElementById("jspsych-survey-text-next").focus(); // give focus to the submit button
		  } else { 
			document.getElementById("input-"+nextq).disabled = false;
			document.getElementById("submit-"+nextq).disabled = false;
			document.getElementById("input-"+nextq).classList.add('active');
			document.getElementById("jspsych-survey-text-"+nextq).classList.remove('obfuscated');
			document.getElementById("input-"+thisq).classList.remove('active');
			document.getElementById("jspsych-survey-text-"+nextq).classList.add('unobfuscated');
			document.getElementById("input-"+nextq).focus();
		  }
	  }
  } 
}
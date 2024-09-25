# Learning Inferences


## **Directories**   

#### Paraphrase Plugin  

**plugin-paraphrase.css:**  
*Primary Function: Formatting for the plugin found in plugin-.js files*  
- Formats Response  
- Formats submission button (both enabled and disabled)
- Obfuscation and unobfuscation formatting  
- Error format  
- Keymap Shake   

**plugin-paraphrase.js**  
Primary function:
- Initializes question prompt and response box
- Randomizes question order  
- Labels submission button and sets preamble
- Blocks browser autofill  

- 'SurveyTextPlugin' class created:
    - Defines the rows, columns, and contents of a given question
    - sets random question order and adds questions
    - Measures response time 
    - Saves data and moves to the next trial

- Cleans user input
    - lower case, split into words, filters for words in vector map

- 'checkIt' function:
    - Notifies the user of current similarity score
    - Keeps following text obfuscated until sim score > 80%
    - Enables the submission button when sim score >80%

### Ideas  

- real-time data stream for instant feedback
- migrate to docker container
    - Consistency across environments
    - Auto-install dependancies
- create/optimize ETL pipeline
    - Extract from submission -> Transform Data for Analysis -> Move to accessable databank




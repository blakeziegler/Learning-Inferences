///History

var mughal_questions = [
    {
        name: "Q1",
        prompt: "Who were the notable ancestors of Babur?",
        options: ["The famous conqueror Timur and leader of the Mongol empire Chinggis Khan", "Rulers of the Mughal Empire Humayun and Akbar The Great", "The founder of the Ottoman Empire Osman I and Mehmed I Sultan of the Ottoman Empire", "Kublai Khan founder of the Yuan Dynasty in the Mongol Empire and Qutb al-Din founder of the Delhi Sultanate"],
        correct: "The famous conqueror Timur and leader of the Mongol empire Chinggis Khan",
        feedback_incorrect: "The correct answer is <strong>The famous conqueror Timur and leader of the Mongol empire Chinggis Khan</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "What bold decision did Babur make as ruler of Fergana?",
        options: ["To conquer the city of Kabul in Afghanistan", "To adopt a new currency system", "To conquer the Indian state of Bihar with the help of the Safavids", "To cross the Rubicon with his army and instigate war with Tashkent"],
        correct: "To conquer the city of Kabul in Afghanistan",
        feedback_incorrect: "The correct answer is <strong>To conquer the city of Kabul in Afghanistan</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What did Babur think of the Indian people?",
        options: ["He had little interest in the people or their religion", "He was fascinated by Indian culture and adopted many of their practices", "He believed they were barbarians and attempted to convert them","He admired their religious dedication, but did not find it practical"],
        correct: "He had little interest in the people or their religion",
        feedback_incorrect: "The correct answer is <strong>He had little interest in the people or their religion</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "Where did Babur begin his rule?",
        options: ["The Central Asian state of Fergana", "The city of Kabul in Afghanistan", "The city of Delhi in the Delhi Sultanate in Northern India", "The Kingdom of Vijayanagara in Southern India"],
        correct: "The Central Asian state of Fergana",
        feedback_incorrect: "The correct answer is <strong>The Central Asian state of Fergana</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What happened only 10 years after Humayun took the throne of the Mughal empire?",
        options: ["He fled to Persia after being defeated by Sher Shah Suri, the ruler of the Indian state of Bihar", "He died of Malaria", "He expanded the Mughal empire further East into China, claiming the Akto region", "He was killed during a coup orchestrated by his two younger brothers"],
        correct: "He fled to Persia after being defeated by Sher Shah Suri, the ruler of the Indian state of Bihar",
        feedback_incorrect: "The correct answer is <strong>He fled to Persia after being defeated by Sher Shah Suri, the ruler of the Indian state of Bihar</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "What did Humayun do when he returned to India in 1555?",
        options: ["Reclaimed his throne and then died a few months later by slipping and falling down a staircase", "Reclaimed his throne and solidified his rule through an expansive military campaign", "He converted to Hinduism to win over the people of India", "He died in a military campaign attempting to reclaim his throne"],
        correct: "Reclaimed his throne and then died a few months later by slipping and falling down a staircase",
        feedback_incorrect: "The correct answer is <strong>Reclaimed his throne and then died a few months later by slipping and falling down a staircase</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "What made Akbar different from his father and grandfather?",
        options: ["He embraced Indian culture", "He inherited the throne at an older age", "He was an accomplished military strategist", "He was ruthless and brutal"],
        correct: "He embraced Indian culture",
        feedback_incorrect: "The correct answer is <strong>He embraced Indian culture</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "Who did Akbar allow to rule the territories he expanded the Mughal empire into?",
        options: ["Local rulers who submitted to him", "His most successful generals", "Wealthy citizens who paid for positions in his court", "His children"],
        correct: "Local rulers who submitted to him",
        feedback_incorrect: "The correct answer is <strong>Local rulers who submitted to him</strong>.",
        required: true
    },
]

var mughal_questions2 = [
    {
        name: "Q1",
        prompt: "Who were the notable ancestors of Babur?",
        options: ["The famous conqueror Timur and leader of the Mongol empire Chinggis Khan", "Rulers of the Mughal Empire Humayun and Akbar The Great", "The founder of the Ottoman Empire Osman I and Mehmed I Sultan of the Ottoman Empire", "Kublai Khan founder of the Yuan Dynasty in the Mongol Empire and Qutb al-Din founder of the Delhi Sultanate"],
        correct: "The famous conqueror Timur and leader of the Mongol empire Chinggis Khan",
        //feedback_incorrect: "The correct answer is <strong>The famous conqueror Timur and leader of the Mongol empire Chinggis Khan</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What bold decision did Babur make as ruler of Fergana?",
        options: ["To conquer the city of Kabul in Afghanistan", "To adopt a new currency system", "To conquer the Indian state of Bihar with the help of the Safavids", "To cross the Rubicon with his army and instigate war with Tashkent"],
        correct: "To conquer the city of Kabul in Afghanistan",
        //feedback_incorrect: "The correct answer is <strong>To conquer the city of Kabul in Afghanistan</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What did Babur think of the Indian people?",
        options: ["He had little interest in the people or their religion", "He was fascinated by Indian culture and adopted many of their practices", "He believed they were barbarians and attempted to convert them","He admired their religious dedication, but did not find it practical"],
        correct: "He had little interest in the people or their religion",
        //feedback_incorrect: "The correct answer is <strong>He had little interest in the people or their religion</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Where did Babur begin his rule?",
        options: ["The Central Asian state of Fergana", "The city of Kabul in Afghanistan", "The city of Delhi in the Delhi Sultanate in Northern India", "The Kingdom of Vijayanagara in Southern India"],
        correct: "The Central Asian state of Fergana",
        //feedback_incorrect: "The correct answer is <strong>The Central Asian state of Fergana</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What happened only 10 years after Humayun took the throne of the Mughal empire?",
        options: ["He fled to Persia after being defeated by Sher Shah Suri, the ruler of the Indian state of Bihar", "He died of Malaria", "He expanded the Mughal empire further East into China, claiming the Akto region", "He was killed during a coup orchestrated by his two younger brothers"],
        correct: "He fled to Persia after being defeated by Sher Shah Suri, the ruler of the Indian state of Bihar",
        //feedback_incorrect: "The correct answer is <strong>He fled to Persia after being defeated by Sher Shah Suri, the ruler of the Indian state of Bihar</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "What did Humayun do when he returned to India in 1555?",
        options: ["Reclaimed his throne and then died a few months later by slipping and falling down a staircase", "Reclaimed his throne and solidified his rule through an expansive military campaign", "He converted to Hinduism to win over the people of India", "He died in a military campaign attempting to reclaim his throne"],
        correct: "Reclaimed his throne and then died a few months later by slipping and falling down a staircase",
        //feedback_incorrect: "The correct answer is <strong>Reclaimed his throne and then died a few months later by slipping and falling down a staircase</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What made Akbar different from his father and grandfather?",
        options: ["He embraced Indian culture", "He inherited the throne at an older age", "He was an accomplished military strategist", "He was ruthless and brutal"],
        correct: "He embraced Indian culture",
        //feedback_incorrect: "The correct answer is <strong>He embraced Indian culture</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "Who did Akbar allow to rule the territories he expanded the Mughal empire into?",
        options: ["Local rulers who submitted to him", "His most successful generals", "Wealthy citizens who paid for positions in his court", "His children"],
        correct: "Local rulers who submitted to him",
        //feedback_incorrect: "The correct answer is <strong>Local rulers who submitted to him</strong>.",
        allow_incorrect: true,
        required: false
    }
]

// New - Testing
var mughal_inferences = [
    {
        name: "Q1",
        prompt: "How did Babur follow in his ancestor&apos;s footsteps?",
        options: ["He conquered Central and Southern Asian territories and established an empire", "He maintained peaceful relations with other Central and Southern Asian territories and promoted cultural exchange", "He re-established trade routes from Eastern to Central Asia", "He focused his investments on education and technological advancement"],
        correct: "He conquered Central and Southern Asian territories and established an empire",
        //feedback_incorrect: "The correct answer is <strong>He conquered Central and Southern Asian territories and established an empire</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why did Babur design gardens in India in the Persian design?",
        options: ["He remained oriented towards central Asia and his homeland", "He wanted to impress Persian diplomats to facilitate trade", "He presented them as a gift to his Persian wife", "He wanted to test whether Persian flora would survive in the Indian climate"],
        correct: "He remained oriented towards central Asia and his homeland",
        //feedback_incorrect: "The correct answer is <strong>He remained oriented towards central Asia and his homeland</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What did the circumstances related to Humayun&apos;s death reflect about his rule?",
        options: ["His rule was tumultuous and insecure", "His rule was defined by military conquest", "His rule was peaceful and full of prosperity", "His rule was short and marred by plague"],
        correct: "His rule was tumultuous and insecure",
        //feedback_incorrect: "The correct answer is <strong>His rule was tumultuous and insecure</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why did Akbar allow local rulers to retain control of their land so long as they submitted to him?",
        options: ["He sought to actively incorporate Indians, both Muslim and Hindu, into his kingdom", "His own dignitaries were spread too thinly throughout the subcontinent", "He was disinterested in India and wanted to offload the work while he expanded elsewhere", "Local rulers were willing to pay high rates to maintain their positions"],
        correct: "He sought to actively incorporate Indians, both Muslim and Hindu, into his kingdom",
        //feedback_incorrect: "The correct answer is <strong>He sought to actively incorporate Indians, both Muslim and Hindu, into his kingdom</strong>.",
        allow_incorrect: true,
        required: false
    }
    
]

var greece_questions = [
    {
        name: "Q1",
        prompt: "What were important features of Greek regions?",
        options: ["Greece&apos;s regions had distinct dialects, cultures, and identities", "Greece&apos;s regions were highly unified and arose from the same central culture", "Greece&apos;s regions had consistent easily traversable landscapes", "Greece&apos;s regions housed more short term transient communities"],
        correct: "Greece&apos;s regions had distinct dialects, cultures, and identities",
        feedback_incorrect: "The correct answer is <strong>Greece&apos;s regions had distinct dialects, cultures, and identities</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "What were politics like in Ancient Greece?",
        options: ["Smaller local governing bodies created political order", "The richest merchants in urban centers decided on policies", "A powerful, centralized state was in control", "Two monarchs ruled and split governance of territories"],
        correct: "Smaller local governing bodies created political order",
        feedback_incorrect: "The correct answer is <strong>Smaller local governing bodies created political order</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "Where within a Greek region did people tend to flock to establish communities and commercial centers?",
        options: ["In the polis", "Along the coast", "In the mountains", "In the Pindus"],
        correct: "In the polis",
        feedback_incorrect: "The correct answer is <strong>In the polis</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What did the term polis originally refer to?",
        options: ["A fortified area or citadel", "A trade center", "A port", "A river"],
        correct: "A fortified area or citadel",
        feedback_incorrect: "The correct answer is <strong>A fortified area or citadel</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "How was social status determined in Sparta?",
        options: ["Military achievements", "Wealth", "Education", "Lineage"],
        correct: "Military achievements",
        feedback_incorrect: "The correct answer is <strong>Military achievements</strong>.",
        reqyuired: true
    },
    {
        name: "Q6",
        prompt: "What was unique about Spartan women in comparison to other Greek city-states?",
        options: ["They could own and inherit property", "They could participate in the military", "They held political offices", "They all lived in a restricted sector of town away from the men"],
        correct: "They could own and inherit property",
        feedback_incorrect: "The correct answer is <strong>They could own and inherit property</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "What was a helot?",
        options: ["An unfree laborer subject to the Spartan state", "A citizen who originated from Peloponnesus", "A religious artifact related to the sun", "A type of spear unique to the Spartan military"],
        correct: "An unfree laborer subject to the Spartan state",
        feedback_incorrect: "The correct answer is <strong>An unfree laborer subject to the Spartan state</strong>.",
        required: true
    },
    {
        name: "Q8", 
        prompt: "How were the people of conquered villages treated in Spartan society?",
        options: ["They did not have equal status to Spartan citizens, but exercised some freedoms", "The had equal status to Spartan citizens", "They did not have equal status to Spartan citizens and were imprisoned", "They were forced to flee their homes"],
        correct: "They did not have equal status to Spartan citizens, but exercised some freedoms",
        feedback_incorrect: "The correct answer is <strong>They did not have equal status to Spartan citizens, but exercised some freedoms</strong>.",
        required: true
    }
]

var greece_questions2 = [
    {
        name: "Q1",
        prompt: "What were important features of Greek regions?",
        options: ["Greece&apos;s regions had distinct dialects, cultures, and identities", "Greece&apos;s regions were highly unified and arose from the same central culture", "Greece&apos;s regions had consistent easily traversable landscapes", "Greece&apos;s regions housed more short term transient communities"],
        correct: "Greece&apos;s regions had distinct dialects, cultures, and identities",
        //feedback_incorrect: "The correct answer is <strong>Greece&apos;s regions had distinct dialects, cultures, and identities</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What were politics like in Ancient Greece?",
        options: ["Smaller local governing bodies created political order", "The richest merchants in urban centers decided on policies", "A powerful, centralized state was in control", "Two monarchs ruled and split governance of territories"],
        correct: "Smaller local governing bodies created political order",
        //feedback_incorrect: "The correct answer is <strong>Smaller local governing bodies created political order</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "Where within a Greek region did people tend to flock to establish communities and commercial centers?",
        options: ["In the polis", "Along the coast", "In the mountains", "In the Pindus"],
        correct: "In the polis",
        //feedback_incorrect: "The correct answer is <strong>In the polis</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What did the term polis originally refer to?",
        options: ["A fortified area or citadel", "A trade center", "A port", "A river"],
        correct: "A fortified area or citadel",
        //feedback_incorrect: "The correct answer is <strong>A fortified area or citadel</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "How was social status determined in Sparta?",
        options: ["Military achievements", "Wealth", "Education", "Lineage"],
        correct: "Military achievements",
        //feedback_incorrect: "The correct answer is <strong>Military achievements</strong>.",
        allow_incorrect: true,
        reqyuired: false
    },
    {
        name: "Q6",
        prompt: "What was unique about Spartan women in comparison to other Greek city-states?",
        options: ["They could own and inherit property", "They could participate in the military", "They held political offices", "They all lived in a restricted sector of town away from the men"],
        correct: "They could own and inherit property",
        //feedback_incorrect: "The correct answer is <strong>They could own and inherit property</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What was a helot?",
        options: ["An unfree laborer subject to the Spartan state", "A citizen who originated from Peloponnesus", "A religious artifact related to the sun", "A type of spear unique to the Spartan military"],
        correct: "An unfree laborer subject to the Spartan state",
        //feedback_incorrect: "The correct answer is <strong>An unfree laborer subject to the Spartan state</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8", 
        prompt: "How were the people of conquered villages treated in Spartan society?",
        options: ["They did not have equal status to Spartan citizens, but exercised some freedoms", "The had equal status to Spartan citizens", "They did not have equal status to Spartan citizens and were imprisoned", "They were forced to flee their homes"],
        correct: "They did not have equal status to Spartan citizens, but exercised some freedoms",
        //feedback_incorrect: "The correct answer is <strong>They did not have equal status to Spartan citizens, but exercised some freedoms</strong>.",
        allow_incorrect: true,
        required: false
    }
]


var greece_inferences = [
    {
        name: "Q1",
        prompt: "Why were regional conflicts a prominent feature of ancient Greece?",
        options: ["Because there was no unity in society or government", "Because of crucial religious differences between regions", "Because of the importance of military tradition in Greek society", "Because Greece bordered on other civilizations, creating tension"],
        correct: "Because there was no unity in society or government",
        //feedback_incorrect: "The correct answer is <strong>Because there was no unity in society or government</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why would a Greek polis be a popular place to settle?",
        options: ["It would offer safety during times of war", "It would be built on a trade route", "It would offer employment", "It would have easy access to water"],
        correct: "It would offer safety during times of war",
        //feedback_incorrect: "The correct answer is <strong>It would offer safety during times of war</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "Why did women control nearly half of Spartan land?",
        options: ["They often inherited land from their male family members when they died at war", "It was customary to give a woman land in order to secure a marriage", "Women dominated Sparta", "Women could participate in the military"],
        correct: "They often inherited land from their male family members when they died at war",
        //feedback_incorrect: "The correct answer is <strong>They often inherited land from their male family members when they died at war</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Of whom was the helot class comprised?",
        options: ["The people of neighboring villages Sparta took over", "Artisans and craftspeople who Spartans cherished", "The most powerful Spartan families from which the two kings were selected", "The average Spartan citizen"],
        correct: "The people of neighboring villages Sparta took over",
        //feedback_incorrect: "The correct answer is <strong>The people of neighboring villages Sparta took over</strong>.",
        allow_incorrect: true,
        required: false
    }
]


// New - Testing
var ghana_questions = [
    {
        name: "Q1",
        prompt: "Why did traders refer to Ghana as “the Land of Gold?”",
        options: ["Ghana had control of three major gold fields to the South", "Ghana had advanced agricultural techniques and a surplus of wheat", "Ghana is believed to be the birthplace of Aje the orisha spirit in Yoruba responsible for great wealth and prosperity", "Ghana largely consisted of desert lands with a slightly golden tint"],
        correct: "Ghana had control of three major gold fields to the South",
        feedback_incorrect: "The correct answer is <strong>Ghana had control of three major gold fields to the South</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "Why were gold nuggets turned over to the government?",
        options: ["The king of Ghana had a monopoly on all gold nuggets found in the mine", "Gold nuggets were re-distributed equitably to the Ghanian citizenry", "Gold nuggets needed to be recorded and pressed into official coins", "All trade was facilitated through the government"],
        correct: "The king of Ghana had a monopoly on all gold nuggets found in the mine",
        feedback_incorrect: "The correct answer is <strong>The king of Ghana had a monopoly on all gold nuggets found in the mine</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What notable geographic feature was the assumed Ghana Empire&apos;s capital Koumbi Saleh located nearby?",
        options: ["The Sahara Desert", "The Nile River", "Mount Kilimanjaro", "Victoria Falls"],
        correct: "The Sahara Desert",
        feedback_incorrect: "The correct answer is <strong>The Sahara Desert</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What animal are West Africans credited with domesticating?",
        options: ["The camel", "The sanga", "The goat", "The donkey"],
        correct: "The camel",
        feedback_incorrect: "The correct answer is <strong>The camel</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What was the climate like in the Sahel where the city of Koumbi Saleh was located?",
        options: ["Dry with scarce drinking water", "Wet marshlands with limited land access", "Rocky and mountainous with little fertile land", "Oceanic with abundant fishing grounds"],
        correct: "Dry with scarce drinking water",
        feedback_incorrect: "The correct answer is <strong>Dry with scarce drinking water</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "How many people were estimated to live in the city of Koumbi Saleh?",
        options: ["Between 15,000 and 20,000", "Between 150,000 and 200,000", "Between 35,000 and 40,000", "Between 1,000 and 5,000"],
        correct: "Between 15,000 and 20,000",
        feedback_incorrect: "The correct answer is <strong>Between 15,000 and 20,000</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "What does The Ghana Empire have in common with The Inca Empire (in the Americas)?",
        options: ["It did not have a form of writing", "It was situated in the mountains", "Resources were distributed by the government", "It developed intricate road systems"],
        correct: "It did not have a form of writing",
        feedback_incorrect: "The correct answer is <strong>It did not have a form of writing</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "How has the history of The Ghana Empire been preserved?",
        options: ["Through oral histories and writings from medieval Arab traders", "Through stone tablets found in the tombs of Ghanian kings", "Through detailed written accounts, recorded by state employed scribes", "Through large floor mosaics depicting important events and figures"],
        correct: "Through oral histories and writings from medieval Arab traders",
        feedback_incorrect: "The correct answer is <strong>Through oral histories and writings from medieval Arab traders</strong>.",
        required: true
    }
]

var ghana_questions2 = [
    {
        name: "Q1",
        prompt: "Why did traders refer to Ghana as “the Land of Gold?”",
        options: ["Ghana had control of three major gold fields to the South", "Ghana had advanced agricultural techniques and a surplus of wheat", "Ghana is believed to be the birthplace of Aje the orisha spirit in Yoruba responsible for great wealth and prosperity", "Ghana largely consisted of desert lands with a slightly golden tint"],
        correct: "Ghana had control of three major gold fields to the South",
        //feedback_incorrect: "The correct answer is <strong>Ghana had control of three major gold fields to the South</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why were gold nuggets turned over to the government?",
        options: ["The king of Ghana had a monopoly on all gold nuggets found in the mine", "Gold nuggets were re-distributed equitably to the Ghanian citizenry", "Gold nuggets needed to be recorded and pressed into official coins", "All trade was facilitated through the government"],
        correct: "The king of Ghana had a monopoly on all gold nuggets found in the mine",
        //feedback_incorrect: "The correct answer is <strong>The king of Ghana had a monopoly on all gold nuggets found in the mine</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What notable geographic feature was the assumed Ghana Empire&apos;s capital Koumbi Saleh located nearby?",
        options: ["The Sahara Desert", "The Nile River", "Mount Kilimanjaro", "Victoria Falls"],
        correct: "The Sahara Desert",
        //feedback_incorrect: "The correct answer is <strong>The Sahara Desert</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What animal are West Africans credited with domesticating?",
        options: ["The camel", "The sanga", "The goat", "The donkey"],
        correct: "The camel",
        //feedback_incorrect: "The correct answer is <strong>The camel</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What was the climate like in the Sahel where the city of Koumbi Saleh was located?",
        options: ["Dry with scarce drinking water", "Wet marshlands with limited land access", "Rocky and mountainous with little fertile land", "Oceanic with abundant fishing grounds"],
        correct: "Dry with scarce drinking water",
        //feedback_incorrect: "The correct answer is <strong>Dry with scarce drinking water</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "How many people were estimated to live in the city of Koumbi Saleh?",
        options: ["Between 15,000 and 20,000", "Between 150,000 and 200,000", "Between 35,000 and 40,000", "Between 1,000 and 5,000"],
        correct: "Between 15,000 and 20,000",
        //feedback_incorrect: "The correct answer is <strong>Between 15,000 and 20,000</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What does The Ghana Empire have in common with The Inca Empire (in the Americas)?",
        options: ["It did not have a form of writing", "It was situated in the mountains", "Resources were distributed by the government", "It developed intricate road systems"],
        correct: "It did not have a form of writing",
        //feedback_incorrect: "The correct answer is <strong>It did not have a form of writing</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "How has the history of The Ghana Empire been preserved?",
        options: ["Through oral histories and writings from medieval Arab traders", "Through stone tablets found in the tombs of Ghanian kings", "Through detailed written accounts, recorded by state employed scribes", "Through large floor mosaics depicting important events and figures"],
        correct: "Through oral histories and writings from medieval Arab traders",
        //feedback_incorrect: "The correct answer is <strong>Through oral histories and writings from medieval Arab traders</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var ghana_inferences = [
    {
        name: "Q1",
        prompt: "Why was the Ghanian state particularly powerful?",
        options: ["The Ghanian state was extremely wealthy", "The Ghanian state was backed by the Almoravids", "The Ghanian state was closely allied with the growing nation of Mali", "The Ghanian state had unrivaled naval authority"],
        correct: "The Ghanian state was extremely wealthy",
        //feedback_incorrect: "The correct answer is <strong>The Ghanian state was extremely wealthy</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "How did the domestication of camels serve the Ghana Empire?",
        options: ["Camels had an advantage in desert travel which revolutionized trans-Sahara trade", "Camels provided an ample food source to help make up for the agricultural difficulties Ghana faced", "Camels are strong and sturdy, able to pull plows to help irrigate soil", "Camels are able to find underground water sources"],
        correct: "Camels had an advantage in desert travel which revolutionized trans-Sahara trade",
        //feedback_incorrect: "The correct answer is <strong>Camels had an advantage in desert travel which revolutionized trans-Sahara trade</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "How were so many people able to live in Koumbi Saleh so close to the Sahara desert?",
        options: ["The city had impressive architecture and engineering", "The people of the city had strictly controlled rations", "The city was made up of temporary structures so people could relocate according to the location of resources", "The city was also close to the Atlantic Ocean"],
        correct: "The city had impressive architecture and engineering",
        //feedback_incorrect: "The correct answer is <strong>The city had impressive architecture and engineering</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why are many of the names and deeds of Ghanian kings unknown today?",
        options: ["They were not recorded by those within The Ghana Empire", "Through stone tablets found in the tombs of Ghanian kings", "Through detailed written accounts, recorded by state employed scribes", "Through large floor mosaics depicting important events and figures"],
        correct: "They were not recorded by those within The Ghana Empire",
        //feedback_incorrect: "The correct answer is <strong>They were not recorded by those within The Ghana Empire</strong>.",
        allow_incorrect: true,
        required: false
    }
]

/// Science

var blood_cells_questions = [
    {
        name: "Q1",
        prompt: "What causes anemia?",
        options: ["The blood does not transport enough oxygen", "The red blood cells cannot repair themselves", "Hemoglobin binds to carbon dioxide", "Oxygen is transported in dissolved blood plasma"],
        correct: "The blood does not transport enough oxygen",
        feedback_incorrect: "The correct answer is <strong>The blood does not transport enough oxygen</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "How does anemia make a person feel?",
        options: ["Weak and tired", "Faint and dizzy", "Nauseous and achy", "Cold and numb"],
        correct: "Weak and tired",
        feedback_incorrect: "The correct answer is <strong>Weak and tired</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What is found in other cells but not in red blood cells?",
        options: ["A nucleus and organelles", "Hemoglobin", "Plasma", "Oxygen and carbon dioxide"],
        correct: "A nucleus and organelles",
        feedback_incorrect: "The correct answer is <strong>A nucleus and organelles</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What can&apos;t red blood cells do?",
        options: ["Reproduce or repair themselves", "Transport carbon dioxide", "Diffuse gas", "Be broken down"],
        correct: "Reproduce or repair themselves",
        feedback_incorrect: "The correct answer is <strong>Reproduce or repair themselves</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What is the vital role of red blood cells?",
        options: ["Carrying oxygen to all cells of the body", "Converting nutrients into energy", "Helping the blood clot to prevent blood loss after injury", "Supporting the immune system"],
        correct: "Carrying oxygen to all cells of the body",
        feedback_incorrect: "The correct answer is <strong>Carrying oxygen to all cells of the body</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "What does the large surface area of red blood cells do?",
        options: ["Enables them to be more efficient at gas diffusion", "Supports the process of cell division", "Allows them to live for longer periods of time", "Causes them to clog blood vessels in rare cases"],
        correct: "Enables them to be more efficient at gas diffusion",
        feedback_incorrect: "The correct answer is <strong>Enables them to be more efficient at gas diffusion</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "What happens to iron in the bone marrow?",
        options: ["It is recycled into new hemoglobin", "It is used to strengthen the bones", "It reacts with diffused gases", "It is transported to the spleen"],
        correct: "It is recycled into new hemoglobin",
        feedback_incorrect: "The correct answer is <strong>It is recycled into new hemoglobin</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "What does hemoglobin do?",
        options: ["Binds to the oxygen and carbon dioxide that red blood cells transport", "Repairs red blood cells when they begin to break down", "Deposits oxygen into the blood plasma", "Restores sickle-shape cells to their original shape to avoid the clogging of blood vessels"],
        correct: "Binds to the oxygen and carbon dioxide that red blood cells transport",
        feedback_incorrect: "The correct answer is <strong>Binds to the oxygen and carbon dioxide that red blood cells transport</strong>.",
        required: true
    }
]

var blood_cells_questions2 = [
    {
        name: "Q1",
        prompt: "What causes anemia?",
        options: ["The blood does not transport enough oxygen", "The red blood cells cannot repair themselves", "Hemoglobin binds to carbon dioxide", "Oxygen is transported in dissolved blood plasma"],
        correct: "The blood does not transport enough oxygen",
        //feedback_incorrect: "The correct answer is <strong>The blood does not transport enough oxygen</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "How does anemia make a person feel?",
        options: ["Weak and tired", "Faint and dizzy", "Nauseous and achy", "Cold and numb"],
        correct: "Weak and tired",
        //feedback_incorrect: "The correct answer is <strong>Weak and tired</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What is found in other cells but not in red blood cells?",
        options: ["A nucleus and organelles", "Hemoglobin", "Plasma", "Oxygen and carbon dioxide"],
        correct: "A nucleus and organelles",
        //feedback_incorrect: "The correct answer is <strong>A nucleus and organelles</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What can&apos;t red blood cells do?",
        options: ["Reproduce or repair themselves", "Transport carbon dioxide", "Diffuse gas", "Be broken down"],
        correct: "Reproduce or repair themselves",
        //feedback_incorrect: "The correct answer is <strong>Reproduce or repair themselves</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What is the vital role of red blood cells?",
        options: ["Carrying oxygen to all cells of the body", "Converting nutrients into energy", "Helping the blood clot to prevent blood loss after injury", "Supporting the immune system"],
        correct: "Carrying oxygen to all cells of the body",
        //feedback_incorrect: "The correct answer is <strong>Carrying oxygen to all cells of the body</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "What does the large surface area of red blood cells do?",
        options: ["Enables them to be more efficient at gas diffusion", "Supports the process of cell division", "Allows them to live for longer periods of time", "Causes them to clog blood vessels in rare cases"],
        correct: "Enables them to be more efficient at gas diffusion",
        //feedback_incorrect: "The correct answer is <strong>Enables them to be more efficient at gas diffusion</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What happens to iron in the bone marrow?",
        options: ["It is recycled into new hemoglobin", "It is used to strengthen the bones", "It reacts with diffused gases", "It is transported to the spleen"],
        correct: "It is recycled into new hemoglobin",
        //feedback_incorrect: "The correct answer is <strong>It is recycled into new hemoglobin</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "What does hemoglobin do?",
        options: ["Binds to the oxygen and carbon dioxide that red blood cells transport", "Repairs red blood cells when they begin to break down", "Deposits oxygen into the blood plasma", "Restores sickle-shape cells to their original shape to avoid the clogging of blood vessels"],
        correct: "Binds to the oxygen and carbon dioxide that red blood cells transport",
        //feedback_incorrect: "The correct answer is <strong>Binds to the oxygen and carbon dioxide that red blood cells transport</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var blood_cells_inferences = [
    {
        name: "Q1",
        prompt: "What about a person&apos;s blood can cause them to feel weak and tired?",
        options: ["A lack of oxygen", "A surplus of hemoglobin", "An excess of plasma", "The absence of carbon dioxide"],
        correct: "A lack of oxygen",
        //feedback_incorrect: "The correct answer is <strong>A lack of oxygen</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What elements of regular body cells enable these cells to reproduce or repair themselves?",
        options: ["Their nuclei and organelles", "Their cellular membranes", "Their ability to absorb oxygen", "Their small surface areas"],
        correct: "Their nuclei and organelles",
        //feedback_incorrect: "The correct answer is <strong>Their nuclei and organelles</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "Why is the large surface area of red blood cells important?",
        options: ["It helps them distribute oxygen more effectively", "It prevents them from becoming misshapen", "It increases their overall volume", "It makes them more soluble in water"],
        correct: "It helps them distribute oxygen more effectively",
        //feedback_incorrect: "The correct answer is <strong>It helps them distribute oxygen more effectively</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why does the blood need iron?",
        options: ["To be able to transport oxygen and carbon dioxide", "To keep from clogging blood vessels", "To strengthen cells and delay cell death", "To produce plasma"],
        correct: "To be able to transport oxygen and carbon dioxide",
        //feedback_incorrect: "The correct answer is <strong>To be able to transport oxygen and carbon dioxide</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var blood_pressure_questions = [
    {
        name: "Q1",
        prompt: "What happens when the diameter of the blood vessels decreases?",
        options: ["Blood pressure increases", "The red blood cells cannot repair themselves", "Hemoglobin binds to carbon dioxide", "Oxygen is transported in dissolved blood plasma"],
        correct: "Blood pressure increases",
        feedback_incorrect: "The correct answer is <strong>Blood pressure increases</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "Stress triggers the release of hormones that do what?",
        options: ["Decrease blood vessel diameter", "Increase pressure in the heart", "Decrease the carbon dioxide in the blood", "Increase the elasticity of the arteries"],
        correct: "Decrease blood vessel diameter",
        feedback_incorrect: "The correct answer is <strong>Decrease blood vessel diameter</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What is systolic blood pressure?",
        options: ["The pressure on the vessels when the heart is beating", "The pressure in the vessels between heartbeats", "The pressure in the vessels during stress", "The pressure on the vessels during heavy exertion"],
        correct: "The pressure on the vessels when the heart is beating",
        feedback_incorrect: "The correct answer is <strong>The pressure on the vessels when the heart is beating</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What happens during systole?",
        options: ["New blood enters the arteries", "The red blood cell count increases", "Hormones are secreted", "Wastes are removed from the blood"],
        correct: "New blood enters the arteries",
        feedback_incorrect: "The correct answer is <strong>New blood enters the arteries</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What is one way cardiac output can be increased?",
        options: ["By increasing the heart rate", "By decreasing the stroke volume", "By removing waste carbon dioxide from the bloodstream", "By including more iron in the diet"],
        correct: "By increasing the heart rate",
        feedback_incorrect: "The correct answer is <strong>By increasing the heart rate</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "Why do blood vessels relax during heavy exertion?",
        options: ["To offset the increased heart rate", "To counteract stress hormones", "To allow for systole", "To decrease their diameter"],
        correct: "To offset the increased heart rate",
        feedback_incorrect: "The correct answer is <strong>To offset the increased heart rate</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "How does fluid move?",
        options: ["From areas of high pressure to low pressure", "From areas of low pressure to high pressure", "To areas of lower volume", "From surfaces of high viscosity to low viscosity"],
        correct: "From areas of high pressure to low pressure",
        feedback_incorrect: "The correct answer is <strong>From areas of high pressure to low pressure</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "Where does blood flow when it leaves the arteries?",
        options: ["Into the arterioles", "Into the heart", "Into the kidneys", "Into the coronary veins"],
        correct: "Into the arterioles",
        feedback_incorrect: "The correct answer is <strong>Into the arterioles</strong>.",
        required: true
    }
]

var blood_pressure_questions2 = [
    {
        name: "Q1",
        prompt: "What happens when the diameter of the blood vessels decreases?",
        options: ["Blood pressure increases", "The red blood cells cannot repair themselves", "Hemoglobin binds to carbon dioxide", "Oxygen is transported in dissolved blood plasma"],
        correct: "Blood pressure increases",
        //feedback_incorrect: "The correct answer is <strong>Blood pressure increases</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Stress triggers the release of hormones that do what?",
        options: ["Decrease blood vessel diameter", "Increase pressure in the heart", "Decrease the carbon dioxide in the blood", "Increase the elasticity of the arteries"],
        correct: "Decrease blood vessel diameter",
        //feedback_incorrect: "The correct answer is <strong>Decrease blood vessel diameter</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What is systolic blood pressure?",
        options: ["The pressure on the vessels when the heart is beating", "The pressure in the vessels between heartbeats", "The pressure in the vessels during stress", "The pressure on the vessels during heavy exertion"],
        correct: "The pressure on the vessels when the heart is beating",
        //feedback_incorrect: "The correct answer is <strong>The pressure on the vessels when the heart is beating</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What happens during systole?",
        options: ["New blood enters the arteries", "The red blood cell count increases", "Hormones are secreted", "Wastes are removed from the blood"],
        correct: "New blood enters the arteries",
        //feedback_incorrect: "The correct answer is <strong>New blood enters the arteries</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What is one way cardiac output can be increased?",
        options: ["By increasing the heart rate", "By decreasing the stroke volume", "By removing waste carbon dioxide from the bloodstream", "By including more iron in the diet"],
        correct: "By increasing the heart rate",
        //feedback_incorrect: "The correct answer is <strong>By increasing the heart rate</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "Why do blood vessels relax during heavy exertion?",
        options: ["To offset the increased heart rate", "To counteract stress hormones", "To allow for systole", "To decrease their diameter"],
        correct: "To offset the increased heart rate",
        //feedback_incorrect: "The correct answer is <strong>To offset the increased heart rate</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "How does fluid move?",
        options: ["From areas of high pressure to low pressure", "From areas of low pressure to high pressure", "To areas of lower volume", "From surfaces of high viscosity to low viscosity"],
        correct: "From areas of high pressure to low pressure",
        //feedback_incorrect: "The correct answer is <strong>From areas of high pressure to low pressure</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "Where does blood flow when it leaves the arteries?",
        options: ["Into the arterioles", "Into the heart", "Into the kidneys", "Into the coronary veins"],
        correct: "Into the arterioles",
        //feedback_incorrect: "The correct answer is <strong>Into the arterioles</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var blood_pressure_inferences = [
    {
        name: "Q1",
        prompt: "How does stress affect blood pressure?",
        options: ["By changing the diameter of the blood vessels", "By stimulating the production of red blood cells", "By delaying diastole", "By oxygenating the blood"],
        correct: "By changing the diameter of the blood vessels",
        //feedback_incorrect: "The correct answer is <strong>By changing the diameter of the blood vessels</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What happens when the heart beats?",
        options: ["New blood enters the arteries", "The artery walls relax", "The heart fills with blood", "The diameter of the arterioles decreases"],
        correct: "New blood enters the arteries",
        //feedback_incorrect: "The correct answer is <strong>New blood enters the arteries</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What happens to cardiac output during exercise?",
        options: ["It increases", "It stays constant", "It decreases", "It releases hormones"],
        correct: "It increases",
        //feedback_incorrect: "The correct answer is <strong>It increases</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why does blood flow from the arteries into the arterioles?",
        options: ["The pressure in the arterioles is lower than the pressure near the heart", "The artery walls stretch to accommodate increases in pressure", "The arterioles have a higher volume than the arteries", "Gravity pulls blood out of the arteries into the arterioles"],
        correct: "The pressure in the arterioles is lower than the pressure near the heart",
        //feedback_incorrect: "The correct answer is <strong>The pressure in the arterioles is lower than the pressure near the heart</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var kidneys_questions = [
    {
        name: "Q1",
        prompt: "When do the kidneys produce more concentrated urine?",
        options: ["When the body is low on water", "When there is not enough calcium in the bones", "When the body needs more red blood cells", "When the blood pressure drops too low"],
        correct: "When the body is low on water",
        feedback_incorrect: "The correct answer is <strong>When the body is low on water</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "What is urine made of?",
        options: ["Liquid waste products of the body", "Calcitriol, the active form of vitamin D", "Nutrients absorbed from food", "Pure water"],
        correct: "Liquid waste products of the body",
        feedback_incorrect: "The correct answer is <strong>Liquid waste products of the body</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What happens when the body takes the nutrients it needs from food?",
        options: ["Some of the wastes are absorbed into the blood", "The nutrients pass through the kidneys", "The kidneys secrete erythropoietin", "Wastes are produced from the breakdown of tissues"],
        correct: "Some of the wastes are absorbed into the blood",
        feedback_incorrect: "The correct answer is <strong>Some of the wastes are absorbed into the blood</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What occurs inside nephrons?",
        options: ["The removal of wastes from the blood", "The secretion of antidiuretic hormone", "The absorption of nutrients", "The production of red blood cells"],
        correct: "The removal of wastes from the blood",
        feedback_incorrect: "The correct answer is <strong>The removal of wastes from the blood</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "When do the kidneys produce angiotensin?",
        options: ["When the blood pressure is too low", "When the body is low on water", "When there is not enough calcium in the bones", "When the body needs more red blood cells"],
        correct: "When the blood pressure is too low",
        feedback_incorrect: "The correct answer is <strong>When the blood pressure is too low</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "What is angiotensin?",
        options: ["A blood vessel-constricting protein", "A hormone that stimulates the production of red blood cells", "An antidiuretic hormone", "A protein that removes wastes from the blood"],
        correct: "A blood vessel-constricting protein",
        feedback_incorrect: "The correct answer is <strong>A blood vessel-constricting protein</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "What do the kidneys do to help maintain homeostasis?",
        options: ["Secrete hormones", "Absorb nutrients from food", "Remove wastes from the blood", "Release minerals"],
        correct: "Secrete hormones",
        feedback_incorrect: "The correct answer is <strong>Secrete hormones</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "What does the hormone erythropoietin do?",
        options: ["Stimulates the production of red blood cells when more are needed", "Regulates blood pressure", "Maintains calcium for bones", "Causes the kidneys to produce more concentrated urine when the body is low on water"],
        correct: "Stimulates the production of red blood cells when more are needed",
        feedback_incorrect: "The correct answer is <strong>Stimulates the production of red blood cells when more are needed</strong>.",
        required: true
    }
]

var kidneys_questions2 = [
    {
        name: "Q1",
        prompt: "When do the kidneys produce more concentrated urine?",
        options: ["When the body is low on water", "When there is not enough calcium in the bones", "When the body needs more red blood cells", "When the blood pressure drops too low"],
        correct: "When the body is low on water",
        //feedback_incorrect: "The correct answer is <strong>When the body is low on water</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What is urine made of?",
        options: ["Liquid waste products of the body", "Calcitriol, the active form of vitamin D", "Nutrients absorbed from food", "Pure water"],
        correct: "Liquid waste products of the body",
        //feedback_incorrect: "The correct answer is <strong>Liquid waste products of the body</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What happens when the body takes the nutrients it needs from food?",
        options: ["Some of the wastes are absorbed into the blood", "The nutrients pass through the kidneys", "The kidneys secrete erythropoietin", "Wastes are produced from the breakdown of tissues"],
        correct: "Some of the wastes are absorbed into the blood",
        //feedback_incorrect: "The correct answer is <strong>Some of the wastes are absorbed into the blood</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What occurs inside nephrons?",
        options: ["The removal of wastes from the blood", "The secretion of antidiuretic hormone", "The absorption of nutrients", "The production of red blood cells"],
        correct: "The removal of wastes from the blood",
        //feedback_incorrect: "The correct answer is <strong>The removal of wastes from the blood</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "When do the kidneys produce angiotensin?",
        options: ["When the blood pressure is too low", "When the body is low on water", "When there is not enough calcium in the bones", "When the body needs more red blood cells"],
        correct: "When the blood pressure is too low",
        //feedback_incorrect: "The correct answer is <strong>When the blood pressure is too low</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "What is angiotensin?",
        options: ["A blood vessel-constricting protein", "A hormone that stimulates the production of red blood cells", "An antidiuretic hormone", "A protein that removes wastes from the blood"],
        correct: "A blood vessel-constricting protein",
        //feedback_incorrect: "The correct answer is <strong>A blood vessel-constricting protein</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What do the kidneys do to help maintain homeostasis?",
        options: ["Secrete hormones", "Absorb nutrients from food", "Remove wastes from the blood", "Release minerals"],
        correct: "Secrete hormones",
        //feedback_incorrect: "The correct answer is <strong>Secrete hormones</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "What does the hormone erythropoietin do?",
        options: ["Stimulates the production of red blood cells when more are needed", "Regulates blood pressure", "Maintains calcium for bones", "Causes the kidneys to produce more concentrated urine when the body is low on water"],
        correct: "Stimulates the production of red blood cells when more are needed",
        //feedback_incorrect: "The correct answer is <strong>Stimulates the production of red blood cells when more are needed</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var kidneys_inferences = [
    {
        name: "Q1",
        prompt: "Why would the kidneys produce more concentrated urine?",
        options: ["To get rid of the same amount of waste without losing as much water", "To offset an increase in blood pressure caused by dehydration", "To conserve calcium and vitamin D while the kidneys are less active", "To compensate for increased amounts of waste in the blood"],
        correct: "To get rid of the same amount of waste without losing as much water",
        //feedback_incorrect: "The correct answer is <strong>To get rid of the same amount of waste without losing as much water</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "How are the digestive system and nephrons related?",
        options: ["Nephrons filter the waste from digestion", "Nephrons are part of the digestive system", "Nephrons absorb nutrients from food", "Nephrons control digestive functions"],
        correct: "Nephrons filter the waste from digestion",
        //feedback_incorrect: "The correct answer is <strong>Nephrons filter the waste from digestion</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What does constricting the blood vessels do?",
        options: ["Increases the blood pressure", "Filters wastes from the blood", "Stimulates hormone production", "Limits kidney function"],
        correct: "Increases the blood pressure",
        //feedback_incorrect: "The correct answer is <strong>Increases the blood pressure</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why would the kidneys cause red blood cells to be produced?",
        options: ["To maintain homeostasis", "To remove wastes from the blood", "To facilitate urine production", "To form nephrons"],
        correct: "To maintain homeostasis",
        //feedback_incorrect: "The correct answer is <strong>To maintain homeostasis</strong>.",
        allow_incorrect: true,
        required: false
    }
]

/// Folk Tales

var clothes_questions = [
    {
        name: "Q1",
        prompt: "What type of clothes did Guifa prefer to wear?",
        options: ["He wore rags for clothes, and never wore any shoes", "He wore fancy costumes that would be fitting for a theater production", "He wore nightgowns whether it was daytime or nighttime", "He wore regular clothes but always wore them inside out"],
        correct: "He wore rags for clothes, and never wore any shoes",
        feedback_incorrect: "The correct answer is <strong>He wore rags for clothes, and never wore any shoes</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "What was the reaction of people toward Guifa, and how did they treat him?",
        options: ["Doors were closed in Guifa&apos;s face, and sometimes people wouldn&apos;t talk to him", "When parties were thrown, Guifa was everyone&apos;s favorite guest", "Guifa&apos;s friends loved him, but the rest of the town hated him", "No one ever paid attention to Guifa"],
        correct: "Doors were closed in Guifa&apos;s face, and sometimes people wouldn&apos;t talk to him",
        feedback_incorrect: "The correct answer is <strong>Doors were closed in Guifa&apos;s face, and sometimes people wouldn&apos;t talk to him</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What did Guifa want?",
        options: ["Friends", "New clothes", "Bread", "A cart"],
        correct: "Friends",
        feedback_incorrect: "The correct answer is <strong>Friends</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What did Guifa&apos;s mother think of the neighboring farmers?",
        options: ["She thought they seemed like kind people", "She thought they seemed arrogant", "She thought they seemed untrustworthy", "She thought they seemed hardworking"],
        correct: "She thought they seemed like kind people",
        feedback_incorrect: "The correct answer is <strong>She thought they seemed like kind people</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What did Guifa bring his neigbors?",
        options: ["A loaf of warm bread", "Fresh vegetables from their garden", "A dirty stone", "An old mule"],
        correct: "A loaf of warm bread",
        feedback_incorrect: "The correct answer is <strong>A loaf of warm bread</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "How did the farmer react when Guifa first came to the farmhouse?",
        options: ["He insulted Guifa and told him to go away", "He was too prideful to accept the bread", "He invited Guifa inside to share a meal", "He expressed gratitude to Guifa&apos;s mother"],
        correct: "He insulted Guifa and told him to go away",
        feedback_incorrect: "The correct answer is <strong>He insulted Guifa and told him to go away</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "How did the farmer and his wife react when Guifa came back to the farmhouse?",
        options: ["They thanked him and invited him inside for a meal", "They were angry that he had returned", "They were amazed that he had brought them another gift", "They accused Guifa of being stuck up"],
        correct: "They thanked him and invited him inside for a meal",
        feedback_incorrect: "The correct answer is <strong>They thanked him and invited him inside for a meal</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "What was different about Guifa when he returned to the farmhouse?",
        options: ["He was wearing fine clothes", "He brought expensive jewels as a gift", "He spoke eloquently", "He was injured"],
        correct: "He was wearing fine clothes",
        feedback_incorrect: "The correct answer is <strong>He was wearing fine clothes</strong>.",
        required: true
    }
]

var clothes_questions2 = [
    {
        name: "Q1",
        prompt: "What type of clothes did Guifa prefer to wear?",
        options: ["He wore rags for clothes, and never wore any shoes", "He wore fancy costumes that would be fitting for a theater production", "He wore nightgowns whether it was daytime or nighttime", "He wore regular clothes but always wore them inside out"],
        correct: "He wore rags for clothes, and never wore any shoes",
        //feedback_incorrect: "The correct answer is <strong>He wore rags for clothes, and never wore any shoes</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What was the reaction of people toward Guifa, and how did they treat him?",
        options: ["Doors were closed in Guifa&apos;s face, and sometimes people wouldn&apos;t talk to him", "When parties were thrown, Guifa was everyone&apos;s favorite guest", "Guifa&apos;s friends loved him, but the rest of the town hated him", "No one ever paid attention to Guifa"],
        correct: "Doors were closed in Guifa&apos;s face, and sometimes people wouldn&apos;t talk to him",
        //feedback_incorrect: "The correct answer is <strong>Doors were closed in Guifa&apos;s face, and sometimes people wouldn&apos;t talk to him</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What did Guifa want?",
        options: ["Friends", "New clothes", "Bread", "A cart"],
        correct: "Friends",
        //feedback_incorrect: "The correct answer is <strong>Friends</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What did Guifa&apos;s mother think of the neighboring farmers?",
        options: ["She thought they seemed like kind people", "She thought they seemed arrogant", "She thought they seemed untrustworthy", "She thought they seemed hardworking"],
        correct: "She thought they seemed like kind people",
        //feedback_incorrect: "The correct answer is <strong>She thought they seemed like kind people</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What did Guifa bring his neigbors?",
        options: ["A loaf of warm bread", "Fresh vegetables from their garden", "A dirty stone", "An old mule"],
        correct: "A loaf of warm bread",
        //feedback_incorrect: "The correct answer is <strong>A loaf of warm bread</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "How did the farmer react when Guifa first came to the farmhouse?",
        options: ["He insulted Guifa and told him to go away", "He was too prideful to accept the bread", "He invited Guifa inside to share a meal", "He expressed gratitude to Guifa&apos;s mother"],
        correct: "He insulted Guifa and told him to go away",
        //feedback_incorrect: "The correct answer is <strong>He insulted Guifa and told him to go away</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "How did the farmer and his wife react when Guifa came back to the farmhouse?",
        options: ["They thanked him and invited him inside for a meal", "They were angry that he had returned", "They were amazed that he had brought them another gift", "They accused Guifa of being stuck up"],
        correct: "They thanked him and invited him inside for a meal",
        //feedback_incorrect: "The correct answer is <strong>They thanked him and invited him inside for a meal</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "What was different about Guifa when he returned to the farmhouse?",
        options: ["He was wearing fine clothes", "He brought expensive jewels as a gift", "He spoke eloquently", "He was injured"],
        correct: "He was wearing fine clothes",
        //feedback_incorrect: "The correct answer is <strong>He was wearing fine clothes</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var clothes_inferences = [
    {
        name: "Q1",
        prompt: "Why did people treat Guifa poorly and refuse to talk to him?",
        options: ["Because of his clothes", "Because he talked too much", "Because he was too sensitive", "Because they didn&apos;t know him"],
        correct: "Because of his clothes",
        //feedback_incorrect: "The correct answer is <strong>Because of his clothes</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why did Guifa's mother send him to the neighboring farm with a basket of bread?",
        options: ["She hoped they would make friends with him", "She had made too much bread and needed to share it", "She sent him to bring food to their neighbors every week", "She wanted to give their neighbors a housewarming gift"],
        correct: "She hoped they would make friends with him",
        //feedback_incorrect: "The correct answer is <strong>She hoped they would make friends with him</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "Why was Guifa sad after his first visit to the farm?",
        options: ["Because the farmer had rejected him despite his friendliness", "Because he had wanted to stay for dinner but was sent away", "Because he had disappointed his mother", "Because the bread had gone to waste"],
        correct: "Because the farmer had rejected him despite his friendliness",
        //feedback_incorrect: "The correct answer is <strong>Because the farmer had rejected him despite his friendliness</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "At the farmer&apos;s house, why did Guifa put food in his clothes and thank them for helping him get a delicious meal?",
        options: ["The farmer only treated him well because he was dressed in fine clothes", "He was grateful for the meal and wanted to show how much he enjoyed it", "He wanted to show the farmers that good food and good clothes are both luxuries", "The farmers would not let Guifa thank them for the meal"],
        correct: "The farmer only treated him well because he was dressed in fine clothes",
        //feedback_incorrect: "The correct answer is <strong>The farmer only treated him well because he was dressed in fine clothes</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var feast_questions = [
    {
        name: "Q1",
        prompt: "What did Spider require of his guests?",
        options: ["They wash their hands before sitting down and eating", "They each bring their own dish", "They sit where they have been assigned", "They arrive on time"],
        correct: "They wash their hands before sitting down and eating",
        feedback_incorrect: "The correct answer is <strong>They wash their hands before sitting down and eating</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "What problem did Tortoise have when going to Spider&apos;s feast?",
        options: ["When he would walk back to the feast after washing his hands they would get dirty again", "When he would wash his hands, he would get distracted and go for a swim instead of the feast", "The river was very far from Spider&apos;s home, and he was too slow to reach the feast on time", "Tortoise got lost when returning to Spider&apos;s home from the river"],
        correct: "When he would walk back to the feast after washing his hands they would get dirty again",
        feedback_incorrect: "The correct answer is <strong>When he would walk back to the feast after washing his hands they would get dirty again</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "Why couldn&apos;t Spider swim down to Tortoise&apos;s house for the feast?",
        options: ["He was too light", "He did not know how to swim", "He was too tired", "He could not get his fine coat wet"],
        correct: "He was too light",
        feedback_incorrect: "The correct answer is <strong>He was too light</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What did Spider put in his coat pockets?",
        options: ["Stones", "Berries", "Nuts", "Thread"],
        correct: "Stones",
        feedback_incorrect: "The correct answer is <strong>Stones</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What did Tortoise require of his guests?",
        options: ["They remove their coats before sitting down and eating", "They wash their hands before sitting down and eating", "They each bring a dish to the feast", "They arrive on time"],
        correct: "They remove their coats before sitting down and eating",
        feedback_incorrect: "The correct answer is <strong>They remove their coats before sitting down and eating</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "What happened when Spider took off his coat?",
        options: ["He floated to the surface of the lake", "Tortoise caught him in a trick", "He became too cold in the water", "The other guests noticed how dirty he was"],
        correct: "He floated to the surface of the lake",
        feedback_incorrect: "The correct answer is <strong>He floated to the surface of the lake</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "How did Spider treat tortoise at the earlier feast?",
        options: ["He tricked him", "He honored him", "He ignored him", "He made fun of him"],
        correct: "He tricked him",
        feedback_incorrect: "The correct answer is <strong>He tricked him</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "How did Tortoise react when Spider floated away?",
        options: ["He laughed at Spider", "He tried to help Spider", "He ignored Spider&apos;s calls for help", "He grew cross with Spider for leaving early"],
        correct: "He laughed at Spider",
        feedback_incorrect: "The correct answer is <strong>He laughed at Spider</strong>.",
        required: true
    }
]

var feast_questions2 = [
    {
        name: "Q1",
        prompt: "What did Spider require of his guests?",
        options: ["They wash their hands before sitting down and eating", "They each bring their own dish", "They sit where they have been assigned", "They arrive on time"],
        correct: "They wash their hands before sitting down and eating",
        //feedback_incorrect: "The correct answer is <strong>They wash their hands before sitting down and eating</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What problem did Tortoise have when going to Spider&apos;s feast?",
        options: ["When he would walk back to the feast after washing his hands they would get dirty again", "When he would wash his hands, he would get distracted and go for a swim instead of the feast", "The river was very far from Spider&apos;s home, and he was too slow to reach the feast on time", "Tortoise got lost when returning to Spider&apos;s home from the river"],
        correct: "When he would walk back to the feast after washing his hands they would get dirty again",
        //feedback_incorrect: "The correct answer is <strong>When he would walk back to the feast after washing his hands they would get dirty again</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "Why couldn&apos;t Spider swim down to Tortoise&apos;s house for the feast?",
        options: ["He was too light", "He did not know how to swim", "He was too tired", "He could not get his fine coat wet"],
        correct: "He was too light",
        //feedback_incorrect: "The correct answer is <strong>He was too light</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What did Spider put in his coat pockets?",
        options: ["Stones", "Berries", "Nuts", "Thread"],
        correct: "Stones",
        //feedback_incorrect: "The correct answer is <strong>Stones</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What did Tortoise require of his guests?",
        options: ["They remove their coats before sitting down and eating", "They wash their hands before sitting down and eating", "They each bring a dish to the feast", "They arrive on time"],
        correct: "They remove their coats before sitting down and eating",
        //feedback_incorrect: "The correct answer is <strong>They remove their coats before sitting down and eating</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "What happened when Spider took off his coat?",
        options: ["He floated to the surface of the lake", "Tortoise caught him in a trick", "He became too cold in the water", "The other guests noticed how dirty he was"],
        correct: "He floated to the surface of the lake",
        //feedback_incorrect: "The correct answer is <strong>He floated to the surface of the lake</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "How did Spider treat tortoise at the earlier feast?",
        options: ["He tricked him", "He honored him", "He ignored him", "He made fun of him"],
        correct: "He tricked him",
        //feedback_incorrect: "The correct answer is <strong>He tricked him</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "How did Tortoise react when Spider floated away?",
        options: ["He laughed at Spider", "He tried to help Spider", "He ignored Spider&apos;s calls for help", "He grew cross with Spider for leaving early"],
        correct: "He laughed at Spider",
        //feedback_incorrect: "The correct answer is <strong>He laughed at Spider</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var feast_inferences = [
    {
        name: "Q1",
        prompt: "Why couldn&apos;t Tortoise get anything to eat at Spider&apos;s feast?",
        options: ["He could not follow Spider&apos;s rules", "He could not reach the table", "He was not fast enough to get there on time", "He was too heavy to sit in Spider&apos;s delicate chairs"],
        correct: "He could not follow Spider&apos;s rules",
        //feedback_incorrect: "The correct answer is <strong>He could not follow Spider&apos;s rules</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why did Spider wear a coat to Tortoise&apos;s feast?",
        options: ["So he would be heavy enough to swim down to Tortoise&apos;s feast", "The lake water was too cold for Spider", "Spider did not want Tortoise to recognize him", "To steal food from Tortoise&apos;s feast"],
        correct: "So he would be heavy enough to swim down to Tortoise&apos;s feast",
        //feedback_incorrect: "The correct answer is <strong>So he would be heavy enough to swim down to Tortoise&apos;s feast</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "How did Tortoise prevent Spider from enjoying the feast?",
        options: ["He made Spider remove his coat", "He made Spider hold all of the plates", "He made Spider weave a tablecloth all night", "He made Spider gather berries from the top of the mountain"],
        correct: "He made Spider remove his coat",
        //feedback_incorrect: "The correct answer is <strong>He made Spider remove his coat</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why did Tortoise laugh at Spider at the later feast?",
        options: ["Spider received his comeuppance", "He caught Spider in the middle of a trick", "Spider made a fool of himself", "Tortoise beat Spider in a game"],
        correct: "Spider received his comeuppance",
        //feedback_incorrect: "The correct answer is <strong>Spider received his comeuppance</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var anansi_questions = [
    {
        name: "Q1",
        prompt: "What did Blacksnake like to do?",
        options: ["Take walks and eat animals", "Climb trees and scare birds", "Hide in bushes and bite humans", "Visit the palace and complain to Master King"],
        correct: "Take walks and eat animals",
        feedback_incorrect: "The correct answer is <strong>Take walks and eat animals</strong>.",
        required: true
    },
    {
        name: "Q2",
        prompt: "Where did Ant set his trap for Blacksnake?",
        options: ["In the middle of a path", "By the river", "Outside of Blacksnake&apos;s house", "Beside a rock in the sun"],
        correct: "In the middle of a path",
        feedback_incorrect: "The correct answer is <strong>In the middle of a path</strong>.",
        required: true
    },
    {
        name: "Q3",
        prompt: "What traits did Blacksnake have?",
        options: ["He was very clever and had big eyes", "He was very cautious and could run very fast", "He was very greedy and had a big stomach", "He was very sneaky and had smooth scales"],
        correct: "He was very clever and had big eyes",
        feedback_incorrect: "The correct answer is <strong>He was very clever and had big eyes</strong>.",
        required: true
    },
    {
        name: "Q4",
        prompt: "What did Blacksnake do when he got to the bear trap?",
        options: ["He arched his body over the jaws of the trap", "He turned around and took another path", "He slithered around the trap", "He nudged the trap until it closed"],
        correct: "He arched his body over the jaws of the trap",
        feedback_incorrect: "The correct answer is <strong>He arched his body over the jaws of the trap</strong>.",
        required: true
    },
    {
        name: "Q5",
        prompt: "What did Ant want?",
        options: ["Respect", "Bravery", "Strength", "Intelligence"],
        correct: "Respect",
        feedback_incorrect: "The correct answer is <strong>Respect</strong>.",
        required: true
    },
    {
        name: "Q6",
        prompt: "Who did Master King think was the wisest and cleverest animal?",
        options: ["Blacksnake", "Yellowtail Snake", "Tiger", "Spider"],
        correct: "Blacksnake",
        feedback_incorrect: "The correct answer is <strong>Blacksnake</strong>.",
        required: true
    },
    {
        name: "Q7",
        prompt: "What did Blacksnake like to brag about?",
        options: ["His length", "His eyesight", "His scales", "His agility"],
        correct: "His length",
        feedback_incorrect: "The correct answer is <strong>His length</strong>.",
        required: true
    },
    {
        name: "Q8",
        prompt: "What story did Ant tell Blacksnake?",
        options: ["A story about the creatures at Master King&apos;s palace, who believed Mr. Yellowtail Snake was the longest snake in the forest", "A story about Mr. Yellowtail Snake, who enjoyed special privileges as Master King&apos;s advisor", "A story about Mr. Yellowtail Snake, who could never be caught by hunters no matter how hard they tried", "A story about the creatures of the forest, who were scared that Mr. Yellowtail Snake would eat all the food in the forest"],
        correct: "A story about the creatures at Master King&apos;s palace, who believed Mr. Yellowtail Snake was the longest snake in the forest",
        feedback_incorrect: "The correct answer is <strong>A story about the creatures at Master King&apos;s palace, who believed Mr. Yellowtail Snake was the longest snake in the forest</strong>.",
        required: true
    }
]

var anansi_questions2 = [
    {
        name: "Q1",
        prompt: "What did Blacksnake like to do?",
        options: ["Take walks and eat animals", "Climb trees and scare birds", "Hide in bushes and bite humans", "Visit the palace and complain to Master King"],
        correct: "Take walks and eat animals",
        //feedback_incorrect: "The correct answer is <strong>Take walks and eat animals</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Where did Ant set his trap for Blacksnake?",
        options: ["In the middle of a path", "By the river", "Outside of Blacksnake&apos;s house", "Beside a rock in the sun"],
        correct: "In the middle of a path",
        //feedback_incorrect: "The correct answer is <strong>In the middle of a path</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What traits did Blacksnake have?",
        options: ["He was very clever and had big eyes", "He was very cautious and could run very fast", "He was very greedy and had a big stomach", "He was very sneaky and had smooth scales"],
        correct: "He was very clever and had big eyes",
        //feedback_incorrect: "The correct answer is <strong>He was very clever and had big eyes</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What did Blacksnake do when he got to the bear trap?",
        options: ["He arched his body over the jaws of the trap", "He turned around and took another path", "He slithered around the trap", "He nudged the trap until it closed"],
        correct: "He arched his body over the jaws of the trap",
        //feedback_incorrect: "The correct answer is <strong>He arched his body over the jaws of the trap</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What did Ant want?",
        options: ["Respect", "Bravery", "Strength", "Intelligence"],
        correct: "Respect",
        //feedback_incorrect: "The correct answer is <strong>Respect</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "Who did Master King think was the wisest and cleverest animal?",
        options: ["Blacksnake", "Yellowtail Snake", "Tiger", "Spider"],
        correct: "Blacksnake",
        //feedback_incorrect: "The correct answer is <strong>Blacksnake</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What did Blacksnake like to brag about?",
        options: ["His length", "His eyesight", "His scales", "His agility"],
        correct: "His length",
        //feedback_incorrect: "The correct answer is <strong>His length</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "What story did Ant tell Blacksnake?",
        options: ["A story about the creatures at Master King&apos;s palace, who believed Mr. Yellowtail Snake was the longest snake in the forest", "A story about Mr. Yellowtail Snake, who enjoyed special privileges as Master King&apos;s advisor", "A story about Mr. Yellowtail Snake, who could never be caught by hunters no matter how hard they tried", "A story about the creatures of the forest, who were scared that Mr. Yellowtail Snake would eat all the food in the forest"],
        correct: "A story about the creatures at Master King&apos;s palace, who believed Mr. Yellowtail Snake was the longest snake in the forest",
        //feedback_incorrect: "The correct answer is <strong>A story about the creatures at Master King&apos;s palace, who believed Mr. Yellowtail Snake was the longest snake in the forest</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var anansi_inferences = [
    {
        name: "Q1",
        prompt: "Why did Ant set his trap for Blacksnake on a path?",
        options: ["Because he knew Blacksnake liked going for walks and would likely walk into his trap", "Because there was a large stone nearby where Ant could watch in hiding to spring the trap", "Because Yellowtail Snake told him Blacktail was coming that way", "Because he wanted all the passing animals to see he had caught Blacksnake"],
        correct: "Because he knew Blacksnake liked going for walks and would likely walk into his trap",
        //feedback_incorrect: "The correct answer is <strong>Because he knew Blacksnake liked going for walks and would likely walk into his trap</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why did Blacksnake arch over the beartrap Ant set?",
        options: ["He saw the trap and was avoiding it", "He was reaching for fruit hanging high in a tree", "Yellowtail Snake warned him about the trap and he was avoiding it", "He was stretching to be warmed by the sun"],
        correct: "He saw the trap and was avoiding it",
        //feedback_incorrect: "The correct answer is <strong>He saw the trap and was avoiding it</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "Why did Ant present Blacksnake stretched out on a pole to Master King?",
        options: ["To prove he had outsmarted Blacksnake", "So that Master King would punish Blacksnake for his arrogance", "To prove how long Blacksnake was", "So that Master King could put the trapped Blacksnake on display"],
        correct: "To prove he had outsmarted Blacksnake",
        //feedback_incorrect: "The correct answer is <strong>To prove he had outsmarted Blacksnake</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "Why did Blacksnake stretch out his full length for Ant?",
        options: ["To prove he was longer than Yellowtail Snake", "To help Ant get out of the pit trap he had set", "To show him his elegant scales", "To reach the food Ant was offering"],
        correct: "To prove he was longer than Yellowtail Snake",
        //feedback_incorrect: "The correct answer is <strong>To prove he was longer than Yellowtail Snake</strong>.",
        allow_incorrect: true,
        required: false
    }
]

// MMCB

var story1_questions = [
    {
        name: "Q1",
        prompt: "According to the story, what two kinds of bears are there?",
        options: ["smart and foolish", "good and bad", "clever and good for nothing", "clever and foolish", "smart and stupid"],
        correct: "smart and foolish",
        //feedback_incorrect: "The correct answer is <strong>smart and foolish</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What was Ike's last name?",
        options: ["Hamberlin", "Halberdin", "Hambelton", "Harrigan", "Handlin"],
        correct: "Hamberlin",
        //feedback_incorrect: "The correct answer is <strong>Hamberlin</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What did the bear do to Ike's gun?",
        options: ["blew out the gunpowder", "emptied the gunpowder", "put his paws on it","took it", "blew down the barrel"],
        correct: "blew out the gunpowder",
        //feedback_incorrect: "The correct answer is <strong>blew out the gunpowder</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What did Ike do to try to get his dogs to obey?",
        options: ["shouted and threw stones", "Yelled", "threw rocks", "said 'sic' em'", "hit them"],
        correct: "shouted and threw stones",
        //feedback_incorrect: "The correct answer is <strong>shouted and threw stones</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What else was Mike besides a bear hunter?",
        options: ["Preacher", "Farmer", "Shouter", "Storyteller", "Minister"],
        correct: "Preacher",
        //feedback_incorrect: "The correct answer is <strong>Preacher</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "What might an onlooker think had made the dogs act so strange?",
        options: ["they had been cursed", "they were disobedient", "a ghost", "they were crazy", "they were under a spell"],
        correct: "they had been cursed",
        //feedback_incorrect: "The correct answer is <strong>they had been cursed</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "How loud did Mike Hooter, known as 'Mike Shouter' shout?",
        options: ["louder than 10 waterfalls", "as loud as a waterfall", "as loud as 10 waterfalls, claiming the Akto region", "louder than a waterfall", "very loud"],
        correct: "louder than 10 waterfalls",
        //feedback_incorrect: "The correct answer is <strong>louder than 10 waterfalls</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "The story said that Ike was as mad as a what?",
        options: ["hornet", "two tomcats fighting", "bear", "person stung by a hornet", "wasp"],
        correct: "hornet",
        //feedback_incorrect: "The correct answer is <strong>hornet</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q9",
        prompt: "When Ike's dogs weren't behaving properly, how did Mike feel?",
        options: ["sorry for Ike", "Amused", "scared for Ike", "numb", "sad for Ike"],
        correct: "sorry for Ike",
        //feedback_incorrect: "The correct answer is <strong>sorry for Ike</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q10",
        prompt: "Who had the better gun -- Mike or Ike?",
        options: ["Mike because he had a two shooter", "Mike and Ike had the same type of gun", "Ike because he had a two shooter", "Ike because he had a repeater", "Mike because he had a repeater"],
        correct: "Mike because he had a two shooter",
        //feedback_incorrect: "The correct answer is <strong>Mike because he had a two shooter</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q11",
        prompt: "By what state nickname did the storyteller refer to Mississippi?",
        options: ["Magnolia state", "Marigold state", "Lilly state", "Mississippi", "Ole Miss"],
        correct: "Magnolia state",
        //feedback_incorrect: "The correct answer is <strong>Magnolia state</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q12",
        prompt: "According to the story, how did the bear make fun of Ike?",
        options: ["thumbed his nose at Ike", "snubbed his nose at Ike", "poked Ike in the nose", "stuck up his nose at Ike", "put a paw to his nose"],
        correct: "thumbed his nose at Ike",
        //feedback_incorrect: "The correct answer is <strong>thumbed his nose at Ike</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var story2_questions = [
    {
        name: "Q1",
        prompt: "Starting his housework, what was the first thing the husband tried to do?",
        options: ["churn some butter", "get some cream", "get some water", "make some porridge", "feed the cow"],
        correct: "churn some butter",
        //feedback_incorrect: "The correct answer is <strong>churn some butter</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "What crop were they harvesting in the field?",
        options: ["Hay", "Corn", "Wheat", "Grain", "Alfalfa"],
        correct: "Hay",
        //feedback_incorrect: "The correct answer is <strong>Hay</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What was in the barrel in the cellar?",
        options: ["Ale", "Wine", "Cider","Potatoes", "Beer"],
        correct: "Ale",
        //feedback_incorrect: "The correct answer is <strong>Ale</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "4.	What two ways did the cream get spilled?",
        options: ["by pig, man poured it down well", "by pig, man poured it into cellar", "by cow, man poured it down well", "by cow, man poured it into cellar'", "by cow and by baby"],
        correct: "by pig, man poured it down well",
        //feedback_incorrect: "The correct answer is <strong>by pig, man poured it down well</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "Whose idea was it for the husband and wife to change roles?",
        options: ["wife", "wife's mother", "husband", "husband's boss", "both the husband and wife"],
        correct: "wife",
        //feedback_incorrect: "The correct answer is <strong>wife</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "Why did the husband run up the cellar steps?",
        options: ["he heard the pig in the kitchen", "he heard the baby in the kitchen", "he heard the cow", "he heard the baby knock over churn", "he heard the pig knock over churn"],
        correct: "he heard the pig in the kitchen",
        //feedback_incorrect: "The correct answer is <strong>he heard the pig in the kitchen</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What kind of porridge were they supposed to have for lunch?",
        options: ["Oat", "Wheat", "Rye", "Barley", "multi-grain"],
        correct: "Oat",
        //feedback_incorrect: "The correct answer is <strong>Oat</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "How long (in all) did the wife wait to be called in for lunch?",
        options: ["two and a half hours", "one and a half hours", "three hours", "two hours", "one half hour"],
        correct: "two and a half hours",
        //feedback_incorrect: "The correct answer is <strong>two and a half hours</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q9",
        prompt: "How did the wife carry the scythe?",
        options: ["around her neck", "across her shoulders", "around her waist", "in her hand", "across her neck and shoulders"],
        correct: "around her neck",
        //feedback_incorrect: "The correct answer is <strong>around her neck</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q10",
        prompt: "When tying the cow down on the roof, why did the man have to hurry?",
        options: ["he had to grind the oatmeal", "pig might get into the cream", "oatmeal was burning", "the baby might get into the cream", "he had to make his wife's lunch"],
        correct: "he had to grind the oatmeal",
        //feedback_incorrect: "The correct answer is <strong>he had to grind the oatmeal</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q11",
        prompt: "What part of his body did the husband tie the rope to?",
        options: ["thigh", "left leg", "arm", "waist", "ankle"],
        correct: "thigh",
        //feedback_incorrect: "The correct answer is <strong>thigh</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q12",
        prompt: "Where in the house was the fireplace located?",
        options: ["Kitchen", "Cellar", "there was no fireplace", "living room", "near the kitchen"],
        correct: "Kitchen",
        //feedback_incorrect: "The correct answer is <strong>Kitchen</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var story3_questions = [
    {
        name: "Q1",
        prompt: "What was always carried aboard each Florentine ship on a long journey?",
        options: ["one or two cats", "precious stones", "food and water", "two kittens", "gold and silver"],
        correct: "one or two cats",
        //feedback_incorrect: "The correct answer is <strong>one or two cats</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Why did the youths hold the sticks in the dining hall?",
        options: ["to chase the rats away from the food", "to killed the rats", "to attack the rats", "to guard the guests", "to welcome the king"],
        correct: "to chase the rats away from the food",
        //feedback_incorrect: "The correct answer is <strong>to chase the rats away from the food</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "What personality trait was Georgio 'rich' with?",
        options: ["Envy", "Jealousy", "Stupidity", "Selfishness", "Greed"],
        correct: "Envy",
        //feedback_incorrect: "The correct answer is <strong>Envy</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "What three kinds of precious stones did the king give to Ansaldo?",
        options: ["rubies, topazes, and diamonds", "rubies, emeralds, and diamonds", "sapphires, topazes, and opals", "rubies, emeralds, and opals", "rubies, topazes, and opals"],
        correct: "rubies, topazes, and diamonds",
        //feedback_incorrect: "The correct answer is <strong>rubies, topazes, and diamonds</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "What breed of cat did Ansaldo give the king?",
        options: ["Persian", "Manx", "Parisian", "Calico", "Siamese"],
        correct: "Persian",
        //feedback_incorrect: "The correct answer is <strong>Persian</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "How wealthy were the people of the Canary Islands?",
        options: ["very wealthy", "comfortably well off", "destitute", "pretty poor", "moderately wealthy"],
        correct: "very wealthy",
        //feedback_incorrect: "The correct answer is <strong>very wealthy</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "Who accompanied the king when he gave his gift to Georgio?",
        options: ["royal household, 1/2 the islanders", "royal household", "royal household, 1/3 the islanders", "royal household, all the islanders", "king's bodyguard"],
        correct: "royal household, 1/2 the islanders",
        //feedback_incorrect: "The correct answer is <strong>royal household, 1/2 the islanders</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "Who blocked the Italian traders' way to the East?",
        options: ["Turks", "Russians", "Parisians", "Florentines", "Persians"],
        correct: "Turks",
        //feedback_incorrect: "The correct answer is <strong>Turks</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q9",
        prompt: "How did the king feel about Georgio's lovely gifts?",
        options: ["greatly touched by their splendor", "greatly impressed by their splendor", "greatly honored", "deeply impressed", "deeply touched"],
        correct: "greatly touched by their splendor",
        //feedback_incorrect: "The correct answer is <strong>greatly touched by their splendor</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q10",
        prompt: "What did the king think when the cats cleared the dining hall?",
        options: ["that he was witnessing a miracle", "he was astonished and delighted", "Ansaldo was the savior of the island", "the cats were amazing", "that he could not believe his eyes"],
        correct: "that he was witnessing a miracle",
        //feedback_incorrect: "The correct answer is <strong>that he was witnessing a miracle</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q11",
        prompt: "How was the king's gift to Georgio 'wrapped?'",
        options: ["on a silk pillow", "in furry balls", "c.	wasn't 'wrapped'", "in a blanket", "in a pillow case"],
        correct: "on a silk pillow",
        //feedback_incorrect: "The correct answer is <strong>on a silk pillow</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q12",
        prompt: "What reputation did the Florentines have around the world?",
        options: ["cleverness and ability to cope", "remarkable explorers", "daringness and cunningness", "clever and remarkable explorers", "ability to cope with any situation"],
        correct: "cleverness and ability to cope",
        //feedback_incorrect: "The correct answer is <strong>cleverness and ability to cope</strong>.",
        allow_incorrect: true,
        required: false
    }
]

var story4_questions = [
    {
        name: "Q1",
        prompt: "How many pieces did the honey gatherer break into the third time he fell?",
        options: ["one thousand and one", "Ten", "ninety-nine", "one thousand", "one hundred"],
        correct: "one thousand and one",
        //feedback_incorrect: "The correct answer is <strong>one thousand and one</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q2",
        prompt: "Who always carried the honey home?",
        options: ["all three of the sons", "Hear", "the honey gatherer", "Piece and Follow", "Follow"],
        correct: "all three of the sons",
        //feedback_incorrect: "The correct answer is <strong>all three of the sons</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q3",
        prompt: "How did Follow find his father whenever he fell?",
        options: ["followed his father's footprints", "followed the honey", "magic powers","instinct", "followed his brother Hear"],
        correct: "followed his father's footprints",
        //feedback_incorrect: "The correct answer is <strong>followed his father's footprints</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q4",
        prompt: "How many pieces did the honey gatherer fall into the second time he fell?",
        options: ["ninety-nine", "Ten", "one hundred", "one thousand", "one thousand and one"],
        correct: "ninety-nine",
        //feedback_incorrect: "The correct answer is <strong>ninety-nine</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q5",
        prompt: "Which of the three sons was the oldest?",
        options: ["they were all the same age", "the story did not say", "Hear", "Follow", "Piece"],
        correct: "they were all the same age",
        //feedback_incorrect: "The correct answer is <strong>they were all the same age</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q6",
        prompt: "How many pieces did the honey gatherer fall into the first time he fell?",
        options: ["Ten", "one hundred", "ninety-nine", "one thousand", "one thousand and one"],
        correct: "Ten",
        //feedback_incorrect: "The correct answer is <strong>Ten</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q7",
        prompt: "What were the sons doing the second time their father fell?",
        options: ["each boasting that he was the most important", "arguing with each other", "hanging out with each other", "talking with each other", "each boasting that he was the most talented"],
        correct: "each boasting that he was the most important",
        //feedback_incorrect: "The correct answer is <strong>each boasting that he was the most important</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q8",
        prompt: "How tall was the third tree the honey gatherer fell out of?",
        options: ["it reached to the stars", "as high as a hill", "it reached to the sky", "as high as the clouds", "it reached to the moon"],
        correct: "it reached to the stars",
        //feedback_incorrect: "The correct answer is <strong>it reached to the stars</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q9",
        prompt: "Why did the honey gatherer fall out of the first tree?",
        options: ["he tried to balance on a rotten branch", "he reached too high", "he grabbed a weak branch", "he was stung by bees", "the branch was slippery"],
        correct: "he tried to balance on a rotten branch",
        //feedback_incorrect: "The correct answer is <strong>he tried to balance on a rotten branch</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q10",
        prompt: "How tall was the second tree the honey gatherer fell out of?",
        options: ["as high as the clouds", "as high as a hill", "it reached to the sky", "it reached to the stars", "it reached to the moon"],
        correct: "as high as the clouds",
        //feedback_incorrect: "The correct answer is <strong>as high as the clouds</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q11",
        prompt: "The third time the honey gatherer fell, how did Follow know about it?",
        options: ["his father did not come home", "his brothers were acting strangely", "he heard his father fall", "he felt something was wrong", "instinct"],
        correct: "his father did not come home",
        //feedback_incorrect: "The correct answer is <strong>his father did not come home</strong>.",
        allow_incorrect: true,
        required: false
    },
    {
        name: "Q12",
        prompt: "What were the full names of each of the three sons?",
        options: ["Hear-it-however-faint-the-sound, Follow-it-however-great-the-distance, Put-it-together-however-small-the-pieces", "Hear-it-however-distant-the-sound, Follow-it-however-great-the-distance, Mend-it-together-however-many-the-pieces", "Hear-it-however-distant-the-sound, Follow-it-however-far-the-trail, Mend-it-together-however-many-the-pieces", "Hear-it-however-distant-the-sound, Follow-it-however-great-the- distance, Put-it-together-however-small-the-pieces", "Hear-it-however-faint-the-sound, Follow-it-however-far-the-trail, Put-it-together-however-small-the-pieces"],
        correct: "Hear-it-however-faint-the-sound, Follow-it-however-great-the-distance, Put-it-together-however-small-the-pieces",
        //feedback_incorrect: "The correct answer is <strong>Hear-it-however-faint-the-sound, Follow-it-however-great-the-distance, Put-it-together-however-small-the-pieces</strong>.",
        allow_incorrect: true,
        required: false
    }
]

/// History

const mughal_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Mughal Empire</b>",
    questions: mughal_questions,
    randomize_response_order: true,
    ask_for_summary: true 
};

const mughal_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Mughal Empire</b>",
    questions: mughal_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
};

//New - Testing
const mughal_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Mughal Empire</b>",
    questions: mughal_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

const greece_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Anceint Greece</b>",
    questions: greece_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const greece_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Anceint Greece</b>",
    questions: greece_questions2,
    randomize_response_order: true,
    ask_for_summary: false
}

const greece_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Anceint Greece</b>",
    questions: greece_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

const ghana_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>The Ghana Empire</b>",
    questions: ghana_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const ghana_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>The Ghana Empire</b>",
    questions: ghana_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const ghana_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>The Ghana Empire</b>",
    questions: ghana_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

/// Science
const blood_cells_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Red Blood Cells</b>",
    questions: blood_cells_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const blood_cells_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Red Blood Cells</b>",
    questions: blood_cells_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const blood_cells_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Red Blood Cells</b>",
    questions: blood_cells_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

const blood_pressure_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Blood Pressure</b>",
    questions: blood_pressure_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const blood_pressure_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Blood Pressure</b>",
    questions: blood_pressure_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const blood_pressure_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Blood Pressure</b>",
    questions: blood_pressure_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

const kidneys_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Blood Pressure</b>",
    questions: kidneys_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const kidneys_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Blood Pressure</b>",
    questions: kidneys_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const kidneys_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Blood Pressure</b>",
    questions: kidneys_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

/// Folk Tales

const clothes_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>King's Clothes</b>",
    questions: clothes_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const clothes_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>King's Clothes</b>",
    questions: clothes_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const clothes_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>King's Clothes</b>",
    questions: clothes_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

const feast_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>The Feast on the Mountain</b>",
    questions: feast_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const feast_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>The Feast on the Mountain</b>",
    questions: feast_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const feast_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>The Feast on the Mountain</b>",
    questions: feast_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

const anansi_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Why They Name the Stories for Anansi</b>",
    questions: anansi_questions,
    randomize_response_order: true,
    ask_for_summary: true 
}

const anansi_end_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Why They Name the Stories for Anansi</b>",
    questions: anansi_questions2,
    randomize_response_order: true,
    ask_for_summary: false 
}

const anansi_infer_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>Why They Name the Stories for Anansi</b>",
    questions: anansi_inferences,
    randomize_response_order: true,
    ask_for_summary: false 
}

// MMCB

const story1_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>STORY 1: MIKE HOOTER AND THE SMART BEARS IN MISSISSIPPI</b>",
    questions: story1_questions,
    randomize_response_order: true,
    ask_for_summary: false 
}

const story2_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>STORY 2: THE HUSBAND WHO WAS TO TAKE CARE OF THE HOUSE</b>",
    questions: story2_questions,
    randomize_response_order: true,
    ask_for_summary: false 
}

const story3_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>STORY 3: THE MOST PRECIOUS POSSESSION</b>",
    questions: story3_questions,
    randomize_response_order: true,
    ask_for_summary: false 
}

const story4_trial = {
    type: jsPsychSurveyMultiChoiceFB,
    preamble: "<b>STORY 4: THE HONEY GATHERER'S THREE SONS</b>",
    questions: story4_questions,
    randomize_response_order: true,
    ask_for_summary: false 
}
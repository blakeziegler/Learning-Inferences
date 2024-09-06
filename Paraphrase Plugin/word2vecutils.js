function getSimilarity() {
  var doc1 = document.getElementById('doc1').value.toLowerCase();
  var doc2 = document.getElementById('doc2').value.toLowerCase();
  // send documents for cleaning
  doc1 = cleanInput(doc1);
  doc2 = cleanInput(doc2);
  // get the average vector of each document
  doc1vec = averageVector(doc1)
  doc2vec = averageVector(doc2)
  // calculate cosine similarity
  var cosSim = getCosSim(doc1vec, doc2vec);
  document.getElementById('sim-res').innerHTML = 'Similarity: ' + cosSim;
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




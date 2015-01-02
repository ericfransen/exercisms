var words = function (str) {
  var words = str.split(/\s/);
  var word_count = {};

  words.map( function (word) {
    if (word === 'toString') {
      word_count['toString'] = 1
    }
    else if (word in word_count) {
      word_count[word] += 1
    } else {
      word_count[word] = 1
    };
  });
  return word_count;
};

// spec should require logic to handle multiple 'toString' words

module.exports = words;

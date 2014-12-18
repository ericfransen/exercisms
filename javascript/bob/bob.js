'use strict';

var Bob = function() {
  var notOnlyNums = function (sentence) {
    return sentence.match(/[a-z]/i)
  };
  var yelling = function (sentence) {
    return sentence === sentence.toUpperCase();
  };
  var silent = function (sentence) {
    return sentence.trim() === '';
  };
  var question = function (sentence) {
    return sentence[sentence.length - 1] === '?';
  };

  this.hey = function(sentence) {
    if(notOnlyNums(sentence) && yelling(sentence)) {
      return 'Woah, chill out!';
    } else if(silent(sentence)) {
      return 'Fine. Be that way!';
    } else if(question(sentence)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  };
};

module.exports = Bob;

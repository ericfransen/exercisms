// 'use strict';
var Bob = function() {};
var Statement = function(sentence) {
  this.sentence = sentence;
};

Statement.prototype.notOnlyNums = function (sentence) {
  return this.sentence.match(/[a-z]/i);
};
Statement.prototype.yelling = function (sentence) {
  return this.sentence === this.sentence.toUpperCase();
};
Statement.prototype.silent = function (sentence) {
  return this.sentence.trim() === '';
};
Statement.prototype.question = function (sentence) {
  return this.sentence[this.sentence.length - 1] === '?';
};

Bob.prototype.hey = function(sentence) {
  var statement = new Statement(sentence);

  if(statement.notOnlyNums() && statement.yelling()) {
    return 'Woah, chill out!';
  } else if(statement.silent()) {
    return 'Fine. Be that way!';
  } else if(statement.question()) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;

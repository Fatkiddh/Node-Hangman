// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//
// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./Letter.js");

var Word = function(value) {
  this.value = value;
  this.letters = [];
  this.guessesMade = "";

  for (var i = 0; i < this.value.length; i++) {
    var add = new Letter.Letter(this.value[i]);
    this.letters.push(add);

  } // closes for loop to add letter to letters array

  this.done = function() {
    for (var i = 0; i < this.letters.length; i++) {
      if (this.letters[i].show == false) {
        return false;
      }
    }
    return true;

  } // close done function

  this.checkLetter = function(input) {
    var upperCaseLetter = input.toUpperCase();
    if (this.guessesMade.indexOf(upperCaseLetter) != -1) {
      return "Duplicate";
    }
    this.guessesMade += upperCaseLetter;
    for (var i = 0; i < this.letters.length; i++) {
      if (this.letters[i].value.toUpperCase() == upperCaseLetter) {
        this.letters[i].show = true;
      }
    }
  } // closes check letter input function

  this.wordToString = function() {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
      output += this.letters[i].display();
    }
    return output;
  } // closes word to string function

}
var word = "";
var randomWord = new Word(word);
// console.log(randomWord.value);
// console.log(randomWord.guessesMade);
exports.Word = Word;
Word(randomWord);

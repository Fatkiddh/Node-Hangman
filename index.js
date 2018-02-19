// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
//
// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require("./Word.js");
var inquirer = require("inquirer");

function play() {
  console.log(worldCupTeam.wordToString());
  if (worldCupTeam.guessesMade.length >= guessesLeft) {
    console.log('You have no more guesses.');
    play(); //Game over
  }
  inquirer.prompt([{
    name: 'letter',
    type: 'text',
    message: 'Enter a letter, to guess the World Cup Team. ',
    validate: function(str) {
      var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
      return regEx.test(str);
    }
  }]).then(function(inquirerResponse) {
      var inputletter = inquirerResponse.letter;
      worldCupTeam.checkLetter(inputletter); //Check
      if (worldCupTeam.done()) {
        console.log(worldCupTeam.wordToString() + ' Has Won the World Cup!');
        return;
      }
      console.log('You have ' + (guessesLeft - worldCupTeam.guessesMade.length) + ' guesses left.')
      play();
    } // closes then call
  );
} // closes play function

var worldCupTeamsArray = ['Germany', 'Russia', "Costa Rica", "Argintina", "Iceland", "Brazil", ]
var randomTeam = worldCupTeamsArray[Math.floor(Math.random() * worldCupTeamsArray.length)];
var letterGuessed;

var worldCupTeam = new Word.Word(randomTeam);
var guessesLeft = 10;

play(); //Start Game

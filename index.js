const Word = require("./word.js")
const inquirer = require("inquirer")


const randomWordList = ["python", "javascript", "yum", "words"];
const randomNum = Math.floor((Math.random() * randomWordList.length) + 0)
let randomWord = randomWordList[randomNum];
const wordArray = randomWord.split("");


let guesses = 10;
let lettersGuessed = "";


function getGuess () {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter!",
            name: "guess"
        }
    ])
    .then(function(res) {
        if (guesses > 0) {
            lettersGuessed += res.guess + " ";
            const newGuess = new Word (wordArray, res.guess)
            console.log(`You have guessed the following letters: ${lettersGuessed} \nYou have ${guesses} guesses remaining.`);
            console.log(newGuess.displayWord());
            guesses--;
            getGuess();
        }
        else {
            console.log("Sorry, you are out of guesses! \nThe correct word was " + randomWord);
        }
    });
}


getGuess();
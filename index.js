
const Word = require("./word.js")
const inquirer = require("inquirer")

const dopeLine = "---------------------------------------------------"

const randomWordList = ["python", "javascript", "yum", "words"];
const randomNum = Math.floor((Math.random() * randomWordList.length) + 0)
let randomWord = randomWordList[randomNum];
// const wordArray = randomWord.split("");


let guesses = 10;
let lettersGuessed = "";

function startGame() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Are you ready to start?",
            name: "ready"
        }
    ]).then(function(res){
        if (res.ready) {
            console.log(dopeLine);            
            console.log("Here is your word!");
            console.log(randomWord);
            const startArray = new Word (randomWord);
            console.log(startArray.displayWord() + "\n");
            console.log(`You have guessed the following letters: ${lettersGuessed} \nYou have ${guesses} guesses remaining.`);
        };
        getGuess();
    });
};

startGame();


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
            const newGuess = new Word (randomWord, res.guess)
            newGuess.checkLetter();
            console.log(newGuess.displayWord());
            guesses--;
            getGuess();
        }
        else {
            console.log("Sorry, you are out of guesses! \nThe correct word was " + randomWord);
        }
    });
}
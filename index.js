
const Word = require("./word.js")
const inquirer = require("inquirer")

const dopeLine = "---------------------------------------------------"

const randomWordList = ["python", "javascript", "csharp", "html", "react"];
const randomNum = Math.floor((Math.random() * randomWordList.length) + 0)
let randomWord = randomWordList[randomNum];

let guesses = 10;
let lettersGuessed = "";

let currentDisplay = "";

const newGuess = new Word (randomWord)


function startGame() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Are you ready to start?",
            name: "ready"
        }
    ]).then(function(res){
        if (res.ready) {
            console.log(`\n${dopeLine} \n`);            
            console.log("Here is your word!");
            const startArray = new Word (randomWord);
            currentDisplay = startArray.displayWord();
            console.log(currentDisplay);
            console.log(`You have guessed the following letters: ${lettersGuessed} \nYou have ${guesses} guesses remaining. \n \n${dopeLine} \n`);
        };
        getGuess();
    });
};

startGame();

function checklet(guess) {
    newGuess.checkLetter(guess);
    currentDisplay = newGuess.displayWord();
    console.log(currentDisplay)
}


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
            checklet(res.guess);
            guesses--;
            console.log(`You have guessed the following letters: ${lettersGuessed} \nYou have ${guesses} guesses remaining. \n \n${dopeLine} \n`);
            getGuess();
        }
        else {
            console.log("Sorry, you are out of guesses! \nThe correct word was " + randomWord);
        }
    });
}

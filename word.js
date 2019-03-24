const Letter = require("./letter.js")

function Word(word) {

    this.word = word;
    this.myWordArray = [];

    // no need to call this seperate method 
    // this.arrayofObjects = function() {
    //     let wordArray = this.word.split("");
    //     for (let i=0;i<wordArray.length;i++){
    //         let myWordLetter = new Letter(wordArray[i], "x");
    //         this.myWordArray.push(myWordLetter)
    //     }

    // }

    // just kick off the loop when you new up the constructor
    let wordArray = this.word.split("");
    for (let i=0;i<wordArray.length;i++){
        let myWordLetter = new Letter(wordArray[i]);
        this.myWordArray.push(myWordLetter)
    }

    this.checkLetter = function(guess) {
        for (let i=0;i<this.myWordArray.length;i++) {
            this.myWordArray[i].isCorrect(guess);
        }
    }

    this.displayWord = function() {
        let myWord = "";
        // console.log(this.myWordArray[0].displayCharacter())
        for (let i=0;i<this.myWordArray.length;i++) {
            myWord += this.myWordArray[i].displayCharacter();
        }
        return myWord;
    }
};

// TEST for word
const word = new Word("dog");
console.log(word.displayWord()) // gives back "_ _ _"
word.checkLetter("d"); // correct 
console.log(word.displayWord()) // gives back "d _ _"
word.checkLetter("x"); // incorrect
word.checkLetter("o"); // correct
console.log(word.displayWord()) // gives back "d o _"

module.exports = Word;
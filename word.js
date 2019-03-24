const Letter = require("./letter.js")

function Word(word, guess) {

    this.word = word;
    this.myWordArray = [];

    this.arrayofObjects = function() {
        let wordArray = this.word.split("");
        for (let i=0;i<wordArray.length;i++){
            let myWordLetter = new Letter(wordArray[i], guess);
            this.myWordArray.push(myWordLetter)
        }

    }

    this.checkLetter = function() {
        for (let i=0;i<this.myWordArray.length;i++) {
            this.arrayofObjects[i].isCorrect();
        }
    }

    this.displayWord = function() {
        this.arrayofObjects();
        let myWord = "";
        console.log(this.myWordArray[0].displayCharacter())
        for (let i=0;i<this.myWordArray.length;i++) {
            myWord += (this.myWordArray[i].displayCharacter());
        }
        return myWord;
    }
};

module.exports = Word;
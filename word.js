const Letter = require("./letter.js")

function Word(word) {

    this.word = word;
    this.myWordArray = [];

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
        for (let i=0;i<this.myWordArray.length;i++) {
            myWord += this.myWordArray[i].displayCharacter();
        }
        return myWord;
    }
};

module.exports = Word;
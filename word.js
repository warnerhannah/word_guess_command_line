const Letter = require("./letter.js")

function Word(wordArray, letterGuessed) {

    this.arrayofObjects = function() {
        let myWordArray = [];
        for (let i=0;i<wordArray.length;i++){
            let myWordLetter = new Letter(wordArray[i], letterGuessed);
            myWordArray.push(myWordLetter)
        }
        return myWordArray;
    }

    this.displayWord = function() {
        let myWord = "";
        // console.log(this.arrayofObjects()[0].isCorrect())
        for (let i=0;i<this.arrayofObjects().length;i++) {
            if (this.arrayofObjects()[i].isCorrect()) {
                myWord += this.arrayofObjects()[i].character;
            }
            else {
                myWord += "_ ";
            }
        }
        return myWord;
    }
};

module.exports = Word;
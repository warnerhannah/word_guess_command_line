const Letter = require("./letter.js")

const word = "hannah"

const wordArray = word.split("");

const letterGuessed = process.argv[2];

function Word(wordArray,) {

    this.arrayofObjects = function() {
        let myWordArray = [];
        for (let i=0;i<wordArray.length;i++){
            let myWordLetter = new Letter(wordArray[i]);
            myWordArray.push(myWordLetter)
        }
        return myWordArray;
    }

    this.displayWord = function() {
        let myWord = "";
        console.log(myWord)
        for (let i=0;i<this.arrayofObjects().length;i++) {
            if (this.arrayofObjects()[i].value) {
                myWord += this.arrayofObjects()[i].character;
            }
            else {
                myWord += "_ ";
            }
        }
        return myWord;
    }
};


const wordTest = new Word(wordArray);

console.log(wordTest.displayWord());

function Letter(character) {
    this.character = character;
    this.guessed = false;

    //console.log(this.guessed);

    this.isCorrect = function (guess) {
        if (guess === this.character) {
            this.guessed = true;
            return true;
        }

        return false;
    };

    this.displayCharacter = function() {
        if (!this.guessed) {
            return " _ ";
        }
        else {
            return character;
        };
    }
    
}

// TEST of letter 
// const d = new Letter("d");
// console.log(d.isCorrect("d")) // returns true
// console.log(d.displayCharacter()) // returns "d"

// const c = new Letter("c");
// console.log(c.isCorrect("d")) // returns true
// console.log(c.displayCharacter()) // returns "_"

module.exports = Letter; 
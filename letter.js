
function Letter(character) {
    this.character = character;
    this.guessed = false;

    console.log(this.guessed);

    this.isCorrect = function (guess) {
        if (guess === character) {
            this.guessed = true;
        }
    };

    this.displayCharacter = function() {
        if (!this.guessed) {
            return " _ ";
        }
        else {
            return character;
        };
    }
    // console.log(this.guessed)

}

module.exports = Letter; 
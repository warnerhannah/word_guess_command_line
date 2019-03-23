
function Letter(character, guess) {
    this.character = character;
    this.guess = guess;
    this.guessed = false;

    console.log(this.guessed);

    this.isCorrect = function () {
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

function Letter(character) {
    this.character = character;
    this.guessed = false;

    //console.log(this.guessed);

    this.isCorrect = function (guess) {
        if (guess === this.character) {
            this.guessed = true;
            return true;
        }
        else {
            return false;
        }
    };

    this.displayCharacter = function() {
        if (this.guessed) {
            return character + " ";
        }
        else {
            return " _ ";
        };
    }
}

module.exports = Letter; 
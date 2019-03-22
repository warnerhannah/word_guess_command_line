function Letter(character, guessedLetter) {
    this.character = character;

    this.value = false;

    this.displayCharacter = function () {
        if (guessedLetter === character) {
            return character;
        }
        else {
            return " ";
        };
    }

    this.isCorrect = function () {
        if (guessedLetter === character) {
            this.value = true;
        }
        else {
            this.value = false;
        };
    }
}

module.exports = Letter; 
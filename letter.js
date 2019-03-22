function Letter(character, guessedLetter) {
    this.character = character;

    this.value ;

    this.displayCharacter = function () {
        if (guessedLetter === character) {
            return character;
        }
        else {
            return "_ ";
        };
    }

    this.isCorrect = function () {
        if (!this.value) {
            if (guessedLetter === character) {
                this.value = true;
                return this.value;
            }
            else {
                this.value = false;
                return this.value;
            };
        }
        else {
            return this.value
        }
    }
}

module.exports = Letter; 
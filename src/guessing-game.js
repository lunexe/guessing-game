class GuessingGame {
    constructor() {
        this.numMiddle = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.num = Math.round((this.min + this.max) / 2);
        return this.num;

    }

    lower() {
        this.max = Math.round((this.min + this.max) / 2);

    }

    greater() {
        this.min = Math.round((this.min + this.max) / 2);

    }
}

module.exports = GuessingGame;

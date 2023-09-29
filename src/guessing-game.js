class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.mid = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid;
    }

    guess() {
        this.mid = Math.ceil((this.max - this.min) / 2 + this.min);
        return this.mid;
    }

    lower() {
        this.setRange(this.min, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.max);
    }
}

module.exports = GuessingGame;

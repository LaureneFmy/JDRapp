export class Arme {
    _minDegat: number;
    _maxDegat: number;
    _chanceCC: number;

    constructor(minDegat: number, maxDegat: number, chanceCC: number) {
        this._minDegat = minDegat;
        this._maxDegat = maxDegat;
        this._chanceCC = chanceCC;
    }

    getMinDegat() {
        return this._minDegat;
    }

    getMaxDegat() {
        return this._maxDegat;
    }

    getChanceCC() {
        return this._chanceCC;
    }

    setMinDegat(minDegat: number) {
        this._minDegat = minDegat;
    }

    setMaxDegat(maxDegat: number) {
        this._maxDegat = maxDegat;
    }

    setChanceCC(chanceCC: number) {
        this._chanceCC = chanceCC;
    }
}

export class Arme1 extends Arme {

    constructor(minDegat = 2, maxDegat = 10, chanceCC = 20) {
        super(minDegat, maxDegat, chanceCC);
    }

    getMinDegat() {
        return this._minDegat;
    }

    getMaxDegat() {
        return this._maxDegat;
    }

    getChanceCC() {
        return this._chanceCC;
    }

    setMinDegat(minDegat: number) {
        this._minDegat = minDegat;
    }

    setMaxDegat(maxDegat: number) {
        this._maxDegat = maxDegat;
    }

    setChanceCC(chanceCC: number) {
        this._chanceCC = chanceCC;
    }
}

export class Arme2 extends Arme {

    constructor(minDegat = 2, maxDegat = 20, chanceCC = 10) {
        super(minDegat, maxDegat, chanceCC);
    }


    getMinDegat() {
        return this._minDegat;
    }

    getMaxDegat() {
        return this._maxDegat;
    }

    getChanceCC() {
        return this._chanceCC;
    }

    setMinDegat(minDegat: number) {
        this._minDegat = minDegat;
    }

    setMaxDegat(maxDegat: number) {
        this._maxDegat = maxDegat;
    }

    setChanceCC(chanceCC: number) {
        this._chanceCC = chanceCC;
    }
}
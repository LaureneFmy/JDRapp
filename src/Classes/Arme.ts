export class Arme {
    _minDegat: number;
    _maxDegat: number;
    _chanceCC: number;

    constructor(minDegat: number, maxDegat: number, chanceCC: number) {
        this._minDegat = Math.floor(Math.random() * 10) + 1;
        this._maxDegat = Math.floor(Math.random() * 10) + 11;
        this._chanceCC = Math.floor(Math.random() * 20) + 1;
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
    _chanceCCSupp: number;

    constructor(minDegat: number, maxDegat: number, chanceCC: number, chanceCCSupp = 20) {
        super(minDegat, maxDegat, chanceCC);
        this._chanceCCSupp = chanceCCSupp;
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

    getChanceCCSupp() {
        return this._chanceCCSupp;
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

    setChanceCCSupp(chanceCCSupp: number) {
        this._chanceCCSupp = chanceCCSupp;
    }
}

export class Arme2 extends Arme {
    _maxDegatSupp: number;

    constructor(minDegat: number, maxDegat: number, chanceCC: number, maxDegatSupp = 20) {
        super(minDegat, maxDegat, chanceCC);
        this._maxDegatSupp = maxDegatSupp;
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

    getMaxDegatSupp() {
        return this._maxDegatSupp;
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

    setMaxDegatSupp(maxDegatSupp: number) {
        this._maxDegatSupp = maxDegatSupp;
    }
}
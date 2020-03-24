import { Arme, Arme1, Arme2 } from "./Arme";

export class Personnage {

    _nom: string;
    _nbPV: number;
    _nbPVMax: number;
    _defense: number;
    _arme: Arme;

    constructor(nom: string, nbPV = 10, nbPVMax = 10, defense = 2, armeNb: number) {
        this._nom = nom;
        this._nbPV = nbPV;
        this._nbPVMax = nbPVMax;
        this._defense = defense;
        this._arme = this.choisirArme(armeNb);
    }

    getNom() {
        return this._nom;
    }

    getNbPV() {
        return this._nbPV;
    }

    getNbPVMax() {
        return this._nbPVMax;
    }

    getDefense() {
        return this._defense;
    }

    getArme() {
        return this._arme;
    }

    setNom(nom: string) {
        this._nom = nom
    }

    setNbPV(nbPV: number) {
        this._nbPV = nbPV
    }

    setNbPVMax(nbPVMax: number) {
        this._nbPVMax = nbPVMax;
    }

    setDefense(defense: number) {
        this._defense = defense;
    }

    setArme(arme: Arme) {
        this._arme = arme;
    }

    // Méthode choix d'arme
    public choisirArme(nb: number) {
        if (nb === 1) {
            return new Arme1(10, 20, 20);
        };
        if (nb === 2) {
            return new Arme2(10, 20, 20);
        } else {
            return new Arme(10, 20, 20);
        };
    };

    // TODO: Méthode target (pour éviter de taper toujours le même)
    public target(cible: Personnage) {

    };

    // TODO: Méthode attack
    public attack() {

    };
};

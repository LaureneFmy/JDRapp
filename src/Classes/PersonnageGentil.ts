import { Personnage } from "./Personnage";
import { Arme } from "./Arme";

// export const enum Role {
//     A = 'Soigneur',
//     B = 'Classique',
//     C = 'Tank',
//     D = 'Assassin'
// }

export class PersonnageGentil extends Personnage {

    // role: Role;

    constructor(nom: string, nbPV: number, nbPVMax: number, defense: number, arme: number) {
        super(nom, nbPV, nbPVMax, defense, arme);
        // this.role = role;
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

    // getRole() {
    //     return this.role;
    // }

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

    // setRole(role: Role) {
    //     this.role = role;
    // }

    // TODO: Méthode pour soigner
}


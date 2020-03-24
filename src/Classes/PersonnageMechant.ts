import { Personnage } from "./Personnage";
import { Arme } from "./Arme";

export class PersonnageMechant extends Personnage {

    constructor(nom: string, nbPV: number, nbPVMax: number, defense: number, arme: number) {
        super(nom, nbPV, nbPVMax, defense, arme);
    }

    // TODO: Générateur de noms aléatoires
    public createNomMechant() {

    }
}
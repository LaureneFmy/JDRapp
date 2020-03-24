import { PersonnageGentil } from "../Classes/PersonnageGentil";
import { PersonnageMechant } from "../Classes/PersonnageMechant";

export function startGame(nom: string, arme: number) {
    let gentils: PersonnageGentil[] = [];
    let mechants: PersonnageMechant[] = [];

    let gentil = new PersonnageGentil(nom, 100, 100, 50, arme);
    gentils.push(gentil);
    console.log(gentils);
    if (gentil) {
        let mechant = new PersonnageMechant('Mechant', 100, 100, 50, 0);
        mechants.push(mechant);
        console.log(mechants);
    }
};
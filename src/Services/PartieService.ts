import { PersonnageGentil } from "../Classes/PersonnageGentil";
import { PersonnageMechant } from "../Classes/PersonnageMechant";

export function startGame() {
    let gentils: PersonnageGentil[] = [];
    let mechants: PersonnageMechant[] = [];

    let gentil = new PersonnageGentil('Lolo', 100, 100, 50, 1);
    gentils.push(gentil);
    console.log(gentils);
    if (gentil) {
        let mechant = new PersonnageMechant('Mechant', 100, 100, 50, 0);
        mechants.push(mechant);
        console.log(mechants);
    }
};
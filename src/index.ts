import * as readline from 'readline';

import { startGame } from "./Services/PartieService";

const inputReader = async (question: string) => {
    let response;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    await new Promise((resolve, reject) => {
        rl.question(question, (answer: string) => {
            resolve(answer);
        })
    }).then(onfull => {
        response = onfull;
        rl.close();
    });
    return response;
};

// Méthode création personnage
const createPerso = async () => {
    // Lit l'input nom
    let choixNom = await inputReader('Nommez votre gentil : ');
    console.log('nom du gentil : ' + choixNom);
    // Lit l'input arme
    let choixArme = await inputReader('Choisissez votre arme : 1 [ou] 2 : ');
    console.log('choix arme : ' + choixArme)
    // Appel à la méthode du service
    // Stringify nom & number arme (sinon type undefined)
    startGame(JSON.stringify(choixNom), Number(choixArme));
};

createPerso();

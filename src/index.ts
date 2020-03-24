// import * as readline from 'readline';

import { startGame } from "./Services/PartieService";

// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Voulez-vous créer un personnage ? [y/n]', (answerCreate) => {
//     if (answerCreate === 'y') {
//         rl.question('Nommez votre personnage : ', (answerNom) => {
//             console.log(`Votre personnage s'appelle : ${answerNom}`);
//         });
//         rl.question('Choisissez une arme : [1 : Epee / 2 : Fusil]', (answer) => {
//         });
//     } else {
//         rl.close();
//     }
// });

startGame();
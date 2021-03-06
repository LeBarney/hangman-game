const fs = require("fs");
const chalk = require("chalk");
const readLineSync = require("readline-sync");
const { randomInt } = require("crypto");
const {hangmanPic} = require('./pendu.js')

let reserveMots = fs.readFileSync("./dict.txt", "utf-8").split("\n");
let lancerPartie = 1;

while(lancerPartie === 1){
const motAleatoire = (dictionnaire) => {
  // cette fonction permet de choisir un mot au hasard dans un fichier donné en paramètre
  let reponse = randomInt(0, dictionnaire.length);
  return dictionnaire[reponse];
};
let mot = motAleatoire(reserveMots);
let secret = Array(mot.length).fill("_"); // pour pouvoir afficher un nombre de _ correspondant au nombre de lettres du mot secret
let finEssais = false;
let nbreEssai = 10;
let fails = 0;
let trouve = 0;
let progress = 0;
mot = mot.split("");
while ((trouve != 1) || (finEssais = true)) {
  console.log(chalk.magenta(`${secret.join().split(',').join(' ')}, il vous reste ${nbreEssai} essais`));
  let guess = readLineSync.keyIn(chalk.blue("Choisissez une lettre, tapez 5 pour quitter le jeu : "), {limit: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "5",
      ],
    })
    .toLowerCase();
  if (guess === "5") {
    console.log("jeu quitté");
    process.exit(1);
  }
  if (mot.includes(guess)) {
    console.log("bonne réponse");
    for (let i = 0; i < mot.length; i++) {
      if (guess === mot[i]) {
        if (secret[i] === mot[i]) {
        console.log('vous avez déjà trouvé cette lettre')
        } else {
        secret[i] = guess;
        progress++
      }
    }
    }
  } else {
    console.log(chalk.yellow(hangmanPic[fails]))
    console.log(`la lettre ${guess} est pas dans le mot`);
    nbreEssai--;
    fails++;
  }
  if(nbreEssai === 0){
    console.log(chalk.red(`PERDU, la réponse était ${mot.join().split(",").join("")}`));
    lancerPartie === readLineSync.keyIn(chalk.blue("Désirez vous rejouer ? tapez 0 pour arrêter"), {limit:["0","1"]});
    if(lancerPartie === 0){
      process.exit(1)
    }
  }
  else if(progress === mot.length){
    console.log(chalk.green(`GAGNÉ, la réponse était ${mot.join().split(',').join('')}`))
    process.exit(1)
  }
}
}

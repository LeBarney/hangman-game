const fs = require("fs");
const chalk = require("chalk");
const readLineSync = require("readline-sync");
const { randomInt } = require("crypto");

let reserveMots = fs.readFileSync("./dict.txt", "utf-8").split("\n");

const motAleatoire = (dictionnaire) => {
  // cette fonction permet de choisir un mot au hasard dans un fichier donné en paramètre
  let reponse = randomInt(0, dictionnaire.length);
  return dictionnaire[reponse];
};
let mot = motAleatoire(reserveMots);
let secret = Array(mot.length).fill("_").join().split(",").join(" "); // pour pouvoir afficher un nombre de _ correspondant au nombre de lettres du mot secret

nbreEssai = 10;
let trouve = 0;
mot = mot.split("");
while (trouve != 1) {
  console.log(mot);
  console.log(secret);
  let guess = readLineSync
    .keyIn("Choisissez une lettre, tapez 5 pour quitter le jeu", {
      limit: [
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
        } else {
        
        secret[i] = guess;
        console.log(guess);
        console.log(secret[i]);
      }
    }
    }
  } else {
    console.log(`la lettre ${guess} est pas dans le mot`);
    nbreEssai--;
  }
}

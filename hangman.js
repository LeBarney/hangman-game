const fs = require('fs')
const chalk = require('chalk')
const readLineSync = require('readline-sync')
const { randomInt } = require('crypto')

let reserveMots = fs.readFileSync('./dict.txt', 'utf-8').split('\n')

const motAleatoire = (dictionnaire) => {
  let reponse = randomInt(0, dictionnaire.length)
  return dictionnaire[reponse]
}
let mot = motAleatoire(reserveMots)
let secret = Array(mot.length).fill('_').join().split(',').join(' ')


const guess = readLineSync.question("Devinez une lettre")
for(let i = 0; i < guess.length){
   
}

console.log(mot)
console.log(secret)




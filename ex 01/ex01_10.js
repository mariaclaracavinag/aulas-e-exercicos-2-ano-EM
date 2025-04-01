const prompt = require("prompt-sync")();
let qntKM = prompt(`quantos km foram rodados ?`)
let valorkm = 0.15 * qntKM
let qntDias = prompt(`quantos dias ele foi alugado ?`)
let valorDia = 60 * qntDias
let preçoFinal = valorkm + valorDia
console.log (`o carro irá custar apenas ${preçoFinal}`)
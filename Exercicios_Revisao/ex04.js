const prompt = require("prompt-sync")()

let valorhora =  prompt(`quando voce ganha por hora?`)
let hora =  prompt(`quantas horas voce trabalhou ?`)
let salario = valorhora * hora 
console.log (`o salario é ${salario}`)
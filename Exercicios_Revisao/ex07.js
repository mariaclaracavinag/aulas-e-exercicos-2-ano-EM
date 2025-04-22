const prompt = require("prompt-sync")()

let valorhora =  prompt(`quando voce ganha por hora?`)
let hora =  prompt(`quantas horas voce trabalhou ?`)
let salariobruto = valorhora * hora 
let imposto = (salariobruto /100)*11
let INSS = (salariobruto /100)*8 
let sindicato = (salariobruto /100)*5
let salarioliquido = (salariobruto - imposto - INSS - sindicato)
console.log (`o salario é ${salarioliquido}`)
console.log (`o imposto é de  ${imposto}`)
console.log (`o INSS é de  ${INSS}`)
console.log (`o sindicato é de  ${sindicato}`)



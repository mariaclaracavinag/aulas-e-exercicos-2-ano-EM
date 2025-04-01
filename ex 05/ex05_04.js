const prompt = require("prompt-sync")()
let inicio= Number(prompt('Digite o número de inicio: '))
let fim= Number(prompt('Digite o número fim: '))
let passo = Number(prompt('Digite o número de passo:  '))
for (let contador = inicio; contador <= fim; contador+= passo){
    console.log(`os valores são iguais a ${contador}`)
}

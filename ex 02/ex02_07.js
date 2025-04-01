const prompt = require("prompt-sync")();
let velocidade = Number(prompt (`qual a velocidade do carro ?`))
if (velocidade > 80) {
    console.log (`multado`)
}
else {
    console.log (`não multado`)
}
let vmulta = Number (prompt (`qual o valor fixo da multa`))
let custo = (velocidade - 80) * vmulta
console.log (`o custo da multa ficou ${custo}`)

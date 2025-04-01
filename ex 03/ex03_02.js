const prompt = require("prompt-sync")()
let anoAtual = Number (prompt(`qual é o ano atual`));
let nascimento = Number (prompt('qual seu ano de nascimento'));
let idade = anoAtual - nascimento
if (idade <= 10) {
    console.log ("voce é uma criança")
} 
if (idade >= 11 && idade <= 17) {
    console.log ("voce é um adolescente")
}
if (idade <= 18 && idade >= 59) {
    console.log ("voce é um adulto")
}
if (idade > 60) {
    console.log ("voce é um idoso")
}

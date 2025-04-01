const prompt = require("prompt-sync")();

let nota1 = Number (prompt (`digite a nota da 1 prova`));
let nota2 = Number (prompt (`digite a nota da 2 prova`));
let media = (nota1 + nota2) / 2 ;
console.log (`sua media é ${media}`);
if (media < 7 ) {
    console.log (`reprovado`)
}
else { 
    console.log (`aprovado`)
}
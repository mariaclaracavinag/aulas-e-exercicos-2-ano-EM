const prompt = require("prompt-sync")()
let nota1 = Number (prompt(`qual é a primeira nota`));
let nota2 = Number (prompt('qual é a segunda nota'));
let media = (nota1 + nota2) / 2 
if (media >= 7) {
    console.log ('aprovado')
}
else if( media > 5 && media < 7){
    console.log ('recuperação')
}
else if (media < 5) {
    console.log ('reprovado')
}
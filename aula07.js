const prompt = require("prompt-sync")()
//operadores relacionais 
// == quer dizer igual, igualdade
// != quer dizer diferente 
// > maior que 
// < menor que 
// > = maior ou igual 
// < = menor ou igual 

let a = 2;
let b = 3;
console.log (a > b );//false
console.log (a == b);//false
console.log (a != b);//true
console.log (a > 2);//false
console.log (a >= 2);//true

// if estrutura de condição, muito utilizada na programação
let tenhoIngresso = true;
if (tenhoIngresso == true){// se a condiçao for verdadeira 
    //entre nesse bloco de comandos 
    console.log (`posso entrar no show`)
}
let idade = Number (prompt (`qual é a sua idade ?`))
if (idade >= 18){
    console.log(`maior de idade`)
} 
else {console.log (`menor de idade`)}

let TenhoIngresso = false
if (TenhoIngresso == true) { //se a condição for verdadeira
    console.log (`posso entrar no show`)
}
else { //se a primeira condição for false 
     console.log (`estou barrato na portaria`) } 

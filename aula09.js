const prompt = require("prompt-sync")()
//estruturas condicionais aninhadas 
// switch case 

let valorCompra = 120; 
let clienteVIP = true; 

if (valorCompra >= 100) {
    if (clienteVIP == true) {
        console.log (`voce ganhou R$ ${valorCompra * (10 / 100)}`);
    } else {
        let desconto = valorCompra * (5 / 100);
        console.log (`voce ganhou R$ ${desconto} de desconto`);
    }
} else {
    let restante = 100 - valorCompra; 
    console.log (`compre mais R$ ${restante} e ganhe desconto`);
}

//EXERCICIO VOTAÇÃO
let idade = Number (prompt(`qual a sua idade ?`));
if (idade < 16) { 
    console.log (`voce não pode votar`);
    } 
    if (idade > 18 && idade <= 70) {
        console.log (`é obrigado a votar`);
    }
    if (idade > 16 && idade < 18 || idade > 70) {
        console.log (`seu voto é facultativo`);
    }

// MANEIRA DO PROFESSOR 
let idadeP = Number (prompt(`qual a sua idade ?`));
if (idadeP < 16) { 
    console.log (`voce não pode votar`);
    } else {
     if (idadeP > 18 && idadeP <= 70) {
         console.log (`é obrigado a votar`) } 
         else {console.log (`voto facultativo`)}
     }
 
     // SWITCH CASE - quando tem multiplos if else
let N1 = Number (prompt(`qual o primeiro numero?`));
let N2 = Number (prompt(`qual o segundo numero?`));
let OP = (prompt(`qual o operador (+ - / * **):`));
switch (OP) {
    case '+':
        console.log (N1 + N2);
        break; 
    case '-': 
        console.log (N1 - N2)
        break; 
    case '/': 
        console.log (N1 / N2)
        break;
    case '*': 
        console.log (N1 * N2)
        break;
    case '**': 
        console.log (N1 ** N2)
        break;
    default:
    console.log (`operador invalido`)
}
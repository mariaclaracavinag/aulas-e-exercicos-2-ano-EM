const prompt = require("prompt-sync")();
// operaçoes com variaveis 
let n1 = 4;
let n2 = 8;
let Soma = n1 + n2; 
console.log (Soma);

//SUBTRAÇÃO 
let menos = n1 - n2; 
console.log (menos);
// MULTIPLICAÇÃO 
let vezes = n1 * n2;
console.log (vezes);

//DIVISÃO 
let divisao = n1/ n2; 
console.log (divisao);

//EXPONENCIAÇÃO
let exponenciacao = n1 ** n2; 
console.log (exponenciacao);

// CELULAR 
let valor = 1500;
let desconto = 300; 
valor = valor - desconto;
console.log (`promoção celular de R$ ${desconto} de desconto, por apenas R$ ${valor}`); 

//UTILIZANDO PORCENTAGEM 
valor = Number (prompt(`qual é o valor do celular ?`));
desconto = Number (prompt(`qual é o desconto em %?`));
valor = valor - (valor* desconto /100);
console.log (`promoção celular de R$ ${desconto} de desconto, por apenas R$ ${valor}`);

//CALCULO COM VARIAVEIS 
let numero = 4/2;
numero = numero **2;
numero = numero * (50-20);
console.log (`o valor é:`, numero);
console.log (`o valor é: ${numero}`);

//FLUXOGRAMA
let number = 4 
let dobro = number*2 
let metade = number/2
console.log (dobro,metade)
//MANEIRA DO PROFESSOR 
let nr = Number (prompt (`qual numero voce deseja ?`))
let dobroP = nr*2 
let metadeP = nr/2
console.log (`o nr é ${nr}, sua metade é ${metadeP}, e o dobro ${dobroP}`)

//EXERCICIO
let horaspdia= 8 
let dias = 15 
let vhora= 100
let horas= horaspdia * dias 
let custofinal = horas * vhora
console.log (`o valor final é ${custofinal}`)
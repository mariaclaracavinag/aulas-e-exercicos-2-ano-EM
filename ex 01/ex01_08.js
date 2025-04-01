const prompt = require("prompt-sync")();
let paredeL= 50;
let paredeA= 10; 
let area = paredeL * paredeA; 
let tinta= 2; 
let litro = area / tinta; 
console.log (`a quantidade d tinta necessaria é de ${litro} litros`);

// maneira do professor 
let largura = Number (prompt (`qual é a largura em metros ?`))
let altura = Number (prompt (`qual a altura em metros ?`))
let areap = largura * altura 
let rendimento = 2 
let litros = areap / rendimento
console.log (`para pintar ${areap} voce precisa de ${litros} litros de tinta`)
const prompt = require("prompt-sync")()

let qntpares = 0;
let qntimpares = 0; 
let somapares= 0 
let somaimpares= 0
for (let contador = 1; contador <= 5; contador++) {
    let num = Number(prompt('Digite o número ou 0 para parar: '));
     if (num % 2 == 0) {
        qntpares++; 
        somapares= somapares + num;
    }else  {
        qntimpares++;
        somaimpares = somaimpares + num;
    }
}
console.log (`voce digitou ${qntpares} n pares,somados resultou em ${somapares}`)
console.log (`voce digitou ${qntimpares} n impares,somados resultou em ${somaimpares}`)



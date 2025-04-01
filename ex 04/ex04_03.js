const prompt = require("prompt-sync")()

let totalPar = 0;
let totalImpar = 0
let qtde = 2;

while (true) {
    let valor = Number(prompt('Digite o número ou 0 para parar: '));

    if (valor == 0) {
        break;
    }else {
        if (totalPar % 2 == 0){
            totalPar += valor
        }else{
            totalImpar += valor
        }
    }
}
console.log(`A soma do n° par é ${totalPar} `);
console.log(`A soma do n° ${totalImpar}`);

//maneira do professor 
let qntpares = 0;
let qntimpares = 0; 
let somapares= 0 
let somaimpares= 0;

while (true) {
    let num = Number(prompt('Digite o número ou 0 para parar: '));

    if (num == 0) {
        break;
    }
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
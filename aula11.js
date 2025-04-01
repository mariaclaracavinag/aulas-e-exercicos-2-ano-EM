const prompt = require("prompt-sync")()
//ESTRUTURA DE LAÇO DE REPETIÇÃO FOR 

//iniciação da variavel ; condição do for ; incremento da variavel 
for (let contador = 1; contador <= 5; contador++) {
    console.log (contador); 
}
for (let contador = 5; contador <= 50; contador++) {
    console.log (contador); 
}
for (let contador = 5; contador <= 50; contador+=3) { // somando de tres em tres 
    console.log (contador); 
}
//utilizando o break no for 
for (let contador = 1; contador<500; contador++) {
    console.log(contador);
    if (contador == 50) {
        break;
    }
}

console.log (`entregando os notebooks`);
for (let nr = 1; nr <=32; nr++) {
    let nome = prompt(`quem é o n° ${nr}`)
    let presente = prompt (`O(A)${nome} esta presente (S ou N) ?`)
    if (presente== `s`) {
        console.log (`pegar o notebook ${nr}`)
        console.log (`levar o notebook ate o(a) ${nome}`)
    } else {
        console.log (`não pegar o notebook`)
    }
}
//tabuada com for 
let nr = 6; 
for(let contador = 1; contador <= 10; contador++) {
    console.log(`${nr} x ${contador} = ${nr * contador}`);
}
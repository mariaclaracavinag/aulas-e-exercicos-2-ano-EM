const prompt = require("prompt-sync")()

console.log("=============================");
console.log("😉  JODO DA ADIVINHAÇÃO   😉");
console.log("=============================");

let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativas = 0  
while (acertou == false) {
    let chute = Number (prompt(`Digite um numero entre 1 e 100: `));
    tentativas ++;
    if (chute == nrSecreto) {
        console.log (`Parabens voce acertou em ${tentativas}!!! 👏👏👏`);
        acertou = true
    } else if (chute > nrSecreto )  {
       console.log(`voce chutou ${chute}, tente um numero 👇`);
    } else {
        console.log(`voce chutou ${chute}, tente um numero 👆`);
    }
}
console.log(`FIM`);
 
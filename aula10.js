const prompt = require("prompt-sync")()
// ESTRUTURA DE LAÇO DE REPETIÇÃO

let resposta = 's';
 
if (resposta == 's') {
    console.log('voce esta dentro do bloco');
}

console.log ('FIM')

let respostaP = 's';

while (respostaP == 's') {
    console.log('voce esta dentro do bloco');
    respostaP = prompt ('deseja continuar ? s/n: ')
}

console.log ('FIM')

let SenhaSecreta = 'senai'
let senhaDigitada
while(SenhaSecreta != senhaDigitada) {
     console.log('descubra a senha secreta');
     senhaDigitada = prompt ('qual é a senha?: ');
}
console.log ('FIM');
 
// exemplo 3 - executando um dumero determinado de vezes
let contador = 1;
while (contador <= 5) {
    console.log (`o contador esta no ${contador}`);
    contador = contador + 1; 
}
// exemplo 4 
//posso deixar meu laço executando sem uma condiçao especifica, apenas 
// com while (true) e encerrar o loop com o comando break 
let total = 0 
let qtde = 0 

while (true) {
    let valor = Number (prompt ('digite o valor do produto (0 para encerrar):'));
    if (valor == 0) {
        break;
    } else {
        total = valor + total; 
        qtde++;
    }
}
console.log (`voce comprou no total ${qtde}`)
console.log (`valor totalda compra R${total.toFixed(2)}`)

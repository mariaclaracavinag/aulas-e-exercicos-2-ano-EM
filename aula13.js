const prompt = require("prompt-sync")()
//iteração sobre nossos vetores (arrays / lista)
//vetor       0         1        2          3 
let frutas = ['maça', 'banana','abacaxi', 'uva ']
//para iterar sobre o vetor utilizamos o for 
for (let x = 0; x < frutas.length; x++) {
    let frutaatual = frutas[x]
    console.log (`a fruta da posição ${x} é ${frutaatual}`)
}
console.log (`FIM`)

//iterando sobre uma lista usando o for of 
let listajogadores = ['pele', 'maradona', 'messi', 'ronaldo' ];
for (let jogador of listajogadores) {
    console.log(jogador)
}

//iterando com numeros e somando todos eles
let numeros = [1,2,3,4,5];
let soma = 0;
    for (let numero of numeros) {
        console.log (numero);
        soma = numero + soma;
    }
    console.log(soma)
//verificando se existe um item na lista usando includes ()
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b','c','d','f',`g`,'h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
let caracteres = [`1`,`2`,'3','4','5','6','7','8','9']
let letraParaVerificar = prompt(`digite uma letra `)
if(vogais. includes(letraParaVerificar.toLowerCase ())) {
 console.log (`a letra ${letraParaVerificar} é uma vogal`)
} else if (consoantes. includes(letraParaVerificar.toLowerCase ())) {
    console.log(`a letra ${letraParaVerificar} é uma consoante`)
}  else if (caracteres. includes(letraParaVerificar.toLowerCase ())) {
    console.log(`${letraParaVerificar} é um caractere`)
}  else {
    console.log (`${letraParaVerificar} não é uma letra`)
}
let listaDefrutas = ['maça', 'banana','abacaxi', 'uva ']
for (const [pos,fruta] of listaDefrutas.entries()) {
    console.log(`a posição da fruta é ${pos} é ${fruta}`); 
    }

    //separando uma srting utilizando o split ()
let produtos = 'celular,notebook,TV,tablet,monitor'; 
let listadeprodutos = produtos.split (',');
console.log(produtos);
console.log(listadeprodutos);

//            01234
let escola = 'SENAI'; 



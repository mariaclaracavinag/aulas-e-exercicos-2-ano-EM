//escopo de variaveis 
//variavel global pode ser acessada em qualquer lugar 
// variavel local só pode ser acessada dentro do bloco
function NomeEscola() {
    let escola = 'sesi';
    console.log (`valor dentro da função ${escola}`);
}

let escola = 'senai'; 
console.log (`Valor fora da função: ${escola}`)
NomeEscola();
console.log (`Valor após a função: ${escola}`)
//utilizando variaveis global 
var Escola2 = 'senai'; 
function NomeEscola2() {
    Escola2 = 'sesi';
    console.log (`valor dentro da função ${Escola2}`);
}

console.log (`Valor fora da função: ${Escola2}`)
NomeEscola2();
console.log (`Valor após a função: ${Escola2}`)
//documentando funçoes usando o JSdoc 
/**
 * @param {number} a - Primeiro numero
 * @param {number} b - segundo numero 
 * @returns {number} - soma dos dois numeros 
*/
function Soma (a,b){
    return a + b;
}
soma(2,4);
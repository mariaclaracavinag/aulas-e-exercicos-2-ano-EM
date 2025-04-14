console.log('- * - * - * - * - * - * - * - * -');
console.log('SESI/SENAI');
console.log('- * - * - * - * - * - * - * - * -');
function linha () {
    console.log('- * - * - * - * - * - * - * - * -');
}
linha() ;
console.log('SESI/SENAI')
linha() ;
//função sem parametro e retorno
function cabecalho () {
    console.log('- * - * - * - * - * - * - * - * -');
    console.log ('SESI/SENAI');
    console.log('- * - * - * - * - * - * - * - * -');
}
cabecalho();

function cabecalho () {
    linha();
    console.log ('SESI/SENAI');
    linha();
}
//funçao com parametro e sem retorno
function cabecalhoEscola (nomeEscola) {
    linha();
    console.log (nomeEscola);
    linha();
}
cabecalhoEscola (`USP`);
cabecalhoEscola (`SESI`);

function soma (nr1,nr2) {
    let resultado = nr1 + nr2;
    console.log(resultado);
}
soma(5,8);

//função com parametros e retorno
function media (n1,n2) {
    let resultado = (n1 + n2) / 2 ; 
    return resultado; 
}
let valor = media (5,8);

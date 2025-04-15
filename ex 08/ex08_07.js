function soma (nr1,nr2) {
    console.log(nr1 + nr2);
}
function subtrair (nr1,nr2) {
    console.log(nr1 - nr2);
}
function dividir (nr1,nr2) {
    console.log(nr1 / nr2);
}
function multiplicar (nr1,nr2) {
    console.log(nr1 * nr2);
}
function calcular (nr1,nr2,op) {
    if (op == '+') {
        soma(nr1,nr2)
    }else if (op == '-') {
        subtrair (nr1,nr2)
    }else if (op == '*') {
        multiplicar (nr1,nr2)
    }else if (op == '/') {
        dividir (nr1,nr2)
    }else {
        console.log(`operador invalido voce ta crazyyyy`)
    }
}
calcular (10,5,'%')
const prompt = require("prompt-sync")()
let salario = Number (prompt(`qual é o salario`));
if(salario <= 2000 ) {
    let reajuste = salario + (salario* 0.12)
    console.log (`seu salario é ${reajuste}`)
}
if(salario > 2000 && salario<= 4000 ) {
    let reajuste = salario + (salario * 0.10)
    console.log (`seu salario é ${reajuste}`)
}
else if(salario > 4000 ) {
    let reajuste = salario + (salario * 0.08)
    console.log (`seu salario é ${reajuste}`)
}
const prompt = require("prompt-sync")()
let num1 = Number(prompt (`qual o primeiro numero ?`))
let num2 = Number(prompt (`qual o segundo numero ?`))
if (num1 > num2) {
    console.log (`${num1} é maior que ${num2}`)
}
else {console.log (`${num1} é menor que ${num2}`)}
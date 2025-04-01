const prompt = require("prompt-sync")();
let num1 = Number(prompt (`qual o primeiro numero ?`))
let num2 = Number(prompt (`qual o segundo numero ?`))
if (num1 == num2 ) {
    console.log (`são igual`)
}
else console.log (`são diferentes`)
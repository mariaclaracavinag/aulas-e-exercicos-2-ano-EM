const prompt = require("prompt-sync")()
let num = Number(prompt (`qual o numero ?`))
if (num % 2 == 0) {
    console.log (`${num} é um numero par`)
}
else {
    console.log (`${num} é um numero impar`)
}
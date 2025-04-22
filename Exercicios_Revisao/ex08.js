const prompt = require("prompt-sync")()
let nr = prompt(`qual o primerio numero:`)

function nr1 (numero) {
    if (numero<0) {
        console.log (`é negativo`)
    } else {
      console.log (`é postivo`)
    }
}

nr1 (nr)
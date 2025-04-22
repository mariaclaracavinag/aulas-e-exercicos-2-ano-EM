const prompt = require("prompt-sync")()

let sexo =  prompt(`qual seu sexo ?  `)
if (sexo == `F`) {
console.log (`mulher`)
}
else if (sexo == `M`) {
console.log (`homem`)
}
else   {
console.log (`sexo invalido`)
}
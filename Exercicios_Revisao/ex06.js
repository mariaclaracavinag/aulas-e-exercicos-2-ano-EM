const prompt = require("prompt-sync")()

let genero =  prompt(`qual seu sexo ?  `)
let altura =  prompt(`qual sua altura ?  `)

if(genero.toUpperCase() ==`H`){
let PesoIdealH = (72.7 * altura) - 58; 
console.log(`seu peso ideal se for homem ${PesoIdealH}`)
} else if(genero.toUpperCase() ==`M`){
let PesoIdealM = (61.1 * altura) - 44.7; 
console.log(`seu peso ideal se for mulher ${PesoIdealM}`)
}

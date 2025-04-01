const prompt = require("prompt-sync")()
let somaidadeM= 0;
let somaidadeF= 0; 
let qtdeM = 0; 
let qtdeF = 0;

for(let x = 1; x <= 10; x++) {
let idade= Number(prompt('Digite a sua idade: '))
let sexo = Number(prompt('Digite seu sexo: (M/F) '))
   if ( sexo == 'M') {
    qtdeM++;
    somaidadeM = somaidadeM + idade; 
   } else if ( sexo == 'f')
    qtdeF ++;
    somaidadeF = somaidadeF + idade; 
}

console.log (`a media do sexo M é de ${somaidadeM / qtdeM}`)
console.log (`a media do sexo F é de ${somaidadeF/ qtdeF}`)
onsole.log (`a media do sexo é de ${(somaidadeM + somaidadeF) / 10}`)

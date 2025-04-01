const prompt = require("prompt-sync")();
let produto = 25000
let desconto = 0.05
let valorfinal = produto * desconto 
console.log(`a linda bolsa estava ${produto} mas como é a semana do consumidor ela esta por apenas ${valorfinal} aproveite `)

//maneira do professor 
let preco = Number (prompt (`qual é o preço do produto ?`));
let descontop = Number (prompt (`qual é o desconto do produto ?`));
let precofinal= preco - descontop 
console.log (`o novo preço é ${precofinal.toFixed(2)}`);
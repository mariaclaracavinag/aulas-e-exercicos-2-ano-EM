const prompt = require("prompt-sync")();
let valorcarteira = 578;
let dolar = valorcarteira / 5.78;
console.log (`claudio pode ter ${dolar} dolares `);

// maneira do professor 
let reais = Number (prompt (`quando voce tem na carteira em R$:`));
let dolares = reais / 5.78 ;
console.log (`voce tem R$ ${reais} convertendo tem $${dolares.toFixed(2)}`);
const prompt = require("prompt-sync")()
// operadores logicos
// / != not, &&= e, ||= ou, 
let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // false pq as duas condição são F
console.log(a > 1 && b < 2); // false pq apenas uma condição é vdd
console.log(a > 1 && b < 4); // true pq as duas condiçoes são vdd
console.log(a > 1 && b < 4 && c > 4); // true todas condiçoes são vdd

console.log(a > 2 || b < 2); //false nenhuma condiçao é vdd
console.log(a > 1 || b < 2); // true pelo menos uma vdd
console.log(a > 1 || b < 4); //true pelo menos uma vdd
console.log(a > 1 || b < 4 || c > 4); //true 

let altura = Number(prompt(`digite sua altura`));
let peso = Number(prompt(`digite seu peso`));
let IMC = peso / altura ** 2
if (IMC < 18.5) {
    console.log(`voce esta abaixo do peso ideal`);
} else if (IMC > 18.5 && IMC < 24.5) {
    console.log(`peso ideal`);
} else if (IMC > 25 && IMC < 29.9) {
    console.log(`sobrepeso`);
} else { console.log(`obesidade`) }

//PRATICANDO 
let lado1 = Number(prompt(`digite o primeiro lado`));
let lado2 = Number(prompt(`digite o segundo lado`));
let lado3 = Number(prompt(`digite o terceiro lado`));
if (lado1 == lado2 && lado2 == lado3) {
    console.log(`o triangulo é equilatero`);
} else if (lado1 != lado2 && lado2 != lado3) { console.log(`o triangulo é escaleno `) }
else { console.log(`o triangulo é isoceles`) };

//PRATICANDO
let vendas = Number(prompt(`digite o valor das vendas`));
let horas = Number(prompt(`digite as horas semanais`));
if (vendas > 5000 || horas > 40) {
    console.log(`ganhou bonus`);
} else {
    console.log(`não tem direito ao bonus`);
}
let caracter = prompt(`digite uma letra: `);
if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
    console.log(`é uma vogal`);
}
else {
    console.log(`é uma consoante`);
}


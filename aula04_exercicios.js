const prompt = require("prompt-sync")();
// EXERCICIOS VARIAVEIS 
//1- crie variaveis ja atribuindo valores e exiba elas no console 
let nomeAluno = "mariaclara";
let altura = 1.60;
let escola = "sesi"
let anoAtual = " 2025"

// 2- crie as variaveis com o nome do prof, a materia, o ano que engresssou 
let nomeProfessor = 'edcarlos' 
let materia = 'matematica'
let anoIngresso = 2018 

//3- usando os exercicios anteriores, agora precisamos que o usuario digite as informações pelo prompt.converta p/ inteiro os
//anos e fbat a aultura 
nomeAluno = prompt ('qual seu nome?')
altura = parseFloat (prompt("qual a sua altura"))
escola = prompt ("qual a escola ?")
anoAtual= parseInt(prompt('qual o ano atual ?'))
console.log (nomeAluno,altura, escola, anoAtual)


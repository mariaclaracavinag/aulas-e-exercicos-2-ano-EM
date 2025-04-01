const prompt = require("prompt-sync")()
//variaveis compostas /  vetores / arrays 

//variavel simples, cabe apenas 1 dado por vez 
let fruta = 'maça'
fruta = 'banana'

//variavel composta 
let frutas = ['maça', 'banana', 'abacaxi', 'uva'];

console.log(frutas);
console.log(frutas[1]); 

//declaração de uma lista vaziaa
let listavazia= []; 

//declaração de uma lista de numeros compostas
let numeros = [ 1, 2, 8, 5, 9];

//declaração de uma lista de strings 
let nomes = [`ana`, `joão`, `maria`];

//declaração de uma mista mista 
let listaMista = [4,`feijão`, true, 7.55];

//declaração de uma lista com outras listas
listadevetores = [[`coca-cola`, `hot - dog`], [5.00, 10.00]]
console.log(listadevetores[0] [1])

console.log (frutas)
frutas[3]= `melancia`;
console.log (frutas);

//inserindo um novo item 
frutas.push(`laranja`)
frutas = [...frutas, `laranja`] //os dois são a mesma coisa 

//inserindo um novo item em posição especifica
frutas.splice(2,0,`morango`)
// 2- posição 
// 0- quantidade de itens a serem removidos

//excluindo um item da lista
frutas.splice(3,1) // excluindo 3 posição um item a ser removido
frutas.shift () // remove o primeiro item da lista 
frutas.pop () //remove o ultimo item da lista

frutas = ['maça', 'banana',`morango`, 'abacaxi', `melancia`, `laranja`,'uva']
console.log (frutas [4]) //vai mostrar a quarta posição
console.log (frutas.slice(0,4)) // do primeiro ao quarto
console.log (frutas.slice(1)) // do primeiro ao ultimo
console.log (frutas.slice(-1)) // nr de itens do fim ate o inicio
console.log (frutas.length) // total de itens da lista 

frutas.sort () //ordenando em ordem crescente 
console.log (frutas);
frutas.reverse //ordenando em ordem decrescente 
console.log(frutas)

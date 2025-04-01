// importando biblioteca para receber informação do usuario 
const prompt = require("prompt-sync")();

//declarando variavel sem dados (undefined)
let nota; 
//declarando variavel com informação 
let nome = "carlos";

//reatribuindo um valor à variavel nome 
nome = "roberto";
nota = 8.5;

//entrada de dados do nosso programa 
let sobrenome = prompt ("digite seu sobrenome");
let nota1 = Number (prompt ("digite a nota da 1 prova"));
let nota2 = Number (prompt ("digite a nota da 1 prova"));

//processamento dos dados 
let media = (nota1 + nota2) /2; 
let nomecompleto = nome= + ' ' + sobrenome; 
let nomecompleto2 = `${nome} ${sobrenome}`; //segunda maneira de ser feito 
let idade = prompt (`digite sua idade:`); 
let idadenumero = parseInt (idade); 

//saida dos dados, mostrar as informaçoes processadas 
console.log (`---relatorio final---`);
console.log (`o seu nome é: ${nomecompleto} \n sua idade ${idade}`);
console.log (`o seu nome é:` + nomecompleto + `\n sua idade` + idade);
console.log (`sua media é: ${media}`);

let n = 0; //0
n = 0 + 1; //1
n = 0 + 1; //2
n = 0 + 1; //3
n = 0 + 1; //4
n++;       //5
n += 3;    //8
n --;      //7
n = n - 1; //6
n-= 2;     //4
const prompt = require("prompt-sync")();
let aluno = `claudio`;
let nota1 = 10;
let nota2 = 9; 
let media = (nota1 + nota2)/2 ;
console.log(`o ${aluno} foi um otimo aluno, sua media foi de ${media}`);

//maneira do professor,mais completa
let notap1 = Number (prompt (`digite a nota da 1 prova`));
let notap2 = Number (prompt (`digite a nota da 2 prova`));
let mediap = (notap1 + notap2) / 2 ;
console.log (`sua media é ${mediap}`);

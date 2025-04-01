const prompt = require("prompt-sync")();
//criando nossa primeira variavel 
//uma variavel serve para armazenar uma informação/valor
//o memoria crie um espaço com o nome curso e receba o valor 'desenvolvimento de sistemas'
var curso= 'desenvolvimento de sistemas';

//exibindo o conteudo da variavel 
console.log('curso');//para imprimir uma variavel,não se coloca ente ''
console.log(curso); // jeito correto de usar uma variavel 
console.log('curso',curso)

//criando e atribuindo valores a uma variavel 
var idade= 16; //inteira // integer 
var temperatura= 24.5;//real // float 
var nome= 'maria clara'; //string 

console.log('ola', nome, 'voce tem', idade,'anos' )
console.log ('esta cursando', curso, 'hoje faz', temperatura, '°c')

console.log('ola'+ nome+ 'voce tem'+ idade+'anos' )
console.log ('esta cursando'+ curso+ 'hoje faz'+ temperatura+ '°c')

//template spring
//utilizo a crase ``para criar uma sting
//para colocar variaveis dentro da string, utilixa ${variavel}
console.log (`ola,${nome} voce tem ${idade}anos
    esta cursando ${curso} hoje faz ${temperatura}°c`);

    //declarando uma varivel logica/boolean/boleano(true/false)
    var podedirigir= true;
    var estachovendo= false;

    //declarando uma variavel nula 
    var escola ; 

    // exercicio 
    //nota1 /valido
    //nomecompleto / valido
    //média / invalido 
    //console / invalido
    //_salario/ valido 
    //9dade/ invalido
    //minha_variavel/ valido
    //var/ invalido
    //valor$ / invalido
    //nome-completo/ invalido
    //escola_/valido
    //TELEFONE/ valido
    //true/ invalido 
    
    let cidade = 'Andradina'
    var turma = '2°B'
    const ano = 2025
    
    console.log(turma);
    turma = "3°B" // reatribuindo o valor de uma variavel
    console.log (turma);
    //ano = 2026; // nao podemos reatribuir valor a uma constante

    //exercicio transcrever esse pseudocodigo para Js 
    let _nome = 'mclara' ; 
    let _idade = 16;
    let _peso = 57 ;
    console.log(`oi ${_nome} voce tem ${_idade} e pesa ${_peso}`);
    console.log (typeof _nome, typeof _nome, typeof _peso);

    // no prompt o computador espera o usuario digitar uma informaçao 
    // sempre quando recebemos uma informação de entrada ela vem em string 
    _nome= prompt (`qual é o seu nome?`);
    _idade= prompt (`qual é a sua idade?`);
    _peso= prompt (`qual é o seu peso?`);
    console.log(`meu nome é ${_nome}, tenho ${_idade},anos,e peso ${_peso}`);
    console.log (typeof _nome, typeof _nome, typeof _peso);
    //criem 2 variaveis num1 e num2 e recebam as informações pelo prompt 
    let num1 = 4 
    let num2 = 8
    //agora pelo prompt 
    num1= prompt ('qual o primeiro numero?');
    num2= prompt ('qual o segundo numero?');
    console.log (num1 + num2);
    
    console.log (typeof num1); // string 
    num1 = prompt ('qual e o 1n ?')
    num2 = prompt ('qual e o 2n?')

    num1 = Number ( typeof num1); // convertando string para number 
    console.log (typeof num1); //number
    console.log (typeof num2);
    num2 = Number (typeof num2);
    console.log (typeof num2);

    //receber as informaçoes ja convertando seu tipo de dados 
    let nr1 = Number (prompt('digite o primeiro numero'))
    let nr2 = Number (promt ('digite o segundo numero'))
    console.log (num1 = num2)
    
    //convertendo os dados para uma variavel 
    nr1 = "100.14" //string
    nr1 = Number ('100.14') //stirng para number 
    nr1 = parseint ('100.14')//stirng para inteiro 
    nr1 = parsefloat ('100')// string para float 
    nr1 = string (100.14)//numero para string 

    _nome= prompt ('qual é o nome?') //string
    _idade = prompt ('qual é a idade') // int
    _peso = prompt ('qual é o peso?') //float
    console.log(_nome,_idade,_peso)
 
    _nome= prompt ('qual é o nome?') //string
    _idade = parseint (prompt ('qual é a idade'))// mudou paraint
    _peso = parsefloat (prompt ('qual é o peso?')) // mudou para float
    console.log(_nome,_idade,_peso)

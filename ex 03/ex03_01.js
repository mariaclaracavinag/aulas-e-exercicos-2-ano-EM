const prompt = require("prompt-sync")();

let numero = prompt(`qual o numero`);
switch (numero) {
   case '1':
      console.log('domingo')
      break;
   case '2':
      console.log('segunda')
      break;
   case '3':
      console.log('terça')
      break;
   case '4':
      console.log('quarta')
      break;
   case '5':
      console.log('quinta')
      break;
   case '6':
      console.log('sexta')
      break;
   case '7':
      console.log('sabado')
      break;
   default:
      console.log('digite um numero valido ')
      break;
}

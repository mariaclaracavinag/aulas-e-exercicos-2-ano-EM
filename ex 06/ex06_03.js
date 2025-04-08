const prompt = require("prompt-sync")()
let comidas = [];
for (let x = 1; x <= 6; x++) {
    let comidas= prompt (`digite uma comida: `); 
}
comidas.push(comida);
console.log (comidas [0]) 
    console.log (comidas [4]) 
    comidas [6] = 'atraves da minha janela'
    console.log (comidas)
    comidas.splice(7,0,`minha vida fora de serie`)
    console.log (comidas)
    comidas.splice(5,0,'velozes e furiosos')
    console.log (comidas)
    comidas.shift ()
    console.log (comidas)
    comidas.pop ()
    console.log (comidas)
    console.log (comidas.slice(0,3))
    console.log (comidas.slice(-4))
    comidas.reverse ()
    console.log(comidas)

const prompt = require("prompt-sync")()
function ParImpar (num) {
    num = Number(prompt(`qual o numero ?`))
    if (num % 2 == 0) {
        console.log (`è par`)
    }
    if (num % 2 ==1) {
        console.log (`é impar`)
    }
}
ParImpar ();
ParImpar (); 


const prompt = require("prompt-sync")();
let metro = 25;
let cm = metro * 100;
let mili= metro * 1000;
let km = metro/ 1000;
console.log (`em metro é ${metro},em cm é ${cm}, em milimetros é ${mili}\n em kilometros é ${km} `);

//maneira do professor, mais completa 
//lendo o valor em metros 
let metrosp = Number (prompt(`digite uma medida em metros`));
//convertendo em cm 
let cmp = metrosp * 100;
//convertendo em mm
let mm = metrosp * 1000;
//convertendo em km 
let kmp = metrosp / 1000;
//exibindo o valor 
console.log (`${metrosp}m é ${cmp}cm, ${mm}mm e ${kmp}km`)

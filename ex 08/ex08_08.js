function senhaAleatoria(qtdeCaracteres){
    let listacaracteres = ['!','a',5,'R','$','#']
    let senha = '';
    for(let x =1; x<= qtdeCaracteres; x++) {
    let posSorteada = Math.floor(Math.random() * listacaracteres.length)
    senha = senha + listacaracteres [posSorteada];
}
return senha; 
}
let senhaGerada = senhaAleatoria(10)
console.log(senhaGerada)
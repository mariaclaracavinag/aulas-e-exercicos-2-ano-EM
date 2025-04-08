let carros = 'gol,corsa,palio,monza,fusca'
let listadecarros = carros.split(',');
for ( const [pos,car] of listadecarros.entries())
    console.log(`o ${car} esta na posição ${pos}`)


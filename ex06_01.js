let filmes = [' barbie',
    'a barraca do beijo',
    'minha vida fora de serie',
    'avatar', 
    'toy story', 
    'sherek',
    'para todos os garotos que ja amei'
    ]
    console.log (filmes [0]) 
    console.log (filmes [4]) 
    filmes [6] = 'atraves da minha janela'
    console.log (filmes)
    filmes.splice(7,0,`minha vida fora de serie`)
    console.log (filmes)
    filmes.splice(5,0,'velozes e furiosos')
    console.log (filmes)
    filmes.shift ()
    console.log (filmes)
    filmes.pop ()
    console.log (filmes)
    console.log (filmes.slice(0,3))
    console.log (filmes.slice(-4))
    filmes.reverse ()
    console.log(filmes)
    

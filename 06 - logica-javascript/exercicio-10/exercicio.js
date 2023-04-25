let tamanhoQuadrado = window.prompt('digite o tamanho dos lados do quadrado')

for(let i = 1; i <= tamanhoQuadrado; i++){
    let tamanho = ''
    for(let j = 1; j <= tamanhoQuadrado; j++){
        tamanho += '*'
    }
    console.log(tamanho)
}
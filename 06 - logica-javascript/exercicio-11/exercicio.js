let tamanhoTriangulo = window.prompt('digite o tamanho dos lados do quadrado')

for(let i = 1; i <= tamanhoTriangulo; i++){
    let tamanho = ''
    for(let j = 1; j<= i; j++){
        tamanho += '*'
    }
    console.log(tamanho)
}
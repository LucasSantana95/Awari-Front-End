let idades = []

for(let i = 1; i <= 5; i++){
    idades.pop(window.prompt('digite uma idade'))
}

const calculaMedia = () =>{
    let soma = 0
    for(let i = 0; i < idades.length; i++){
        soma += idades[i]
    }
    let media = soma / idades.length
    console.log(media)
}

calculaMedia()
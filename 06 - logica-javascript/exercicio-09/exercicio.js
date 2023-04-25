let idades = []

for(let i = 1; i <= 10; i++){
    idades.pop(window.prompt('digite uma idade'))
}

const calculaIdade = () =>{
    let adultos = 0
    for(let i = 0; i < idades.length; i++){
       if( idades[i] >= 18){
        adultos++
       }
    }
    console.log(adultos)
}

calculaIdade()
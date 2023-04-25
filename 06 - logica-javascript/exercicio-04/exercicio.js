const numeroPrimo = (numero) =>{
    let divisores;

    for(let i = 0; i <= numero; i++){
        if(numero % i == 0){
            divisores++
        }
    }
    return divisores === 2 ? true : false
}

for(let i = 1; i<=100; i++){
    if(numeroPrimo(i)){
        console.log(i)
    }
}
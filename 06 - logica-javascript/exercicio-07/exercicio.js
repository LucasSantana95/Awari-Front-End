let numero = window.prompt('digite um numero', 50)

console.log(`numeros pares de ${numero} até 1`)
for(let i = 1; i<=numero;i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
console.log(`numeros impares de ${numero} até 1`)
for(let i = 1; i<=numero;i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}
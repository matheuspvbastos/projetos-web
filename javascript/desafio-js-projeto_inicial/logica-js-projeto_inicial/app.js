function exibirOla(){ //criação da função
    console.log('Olá mundo!')
}
exibirOla() //chamando a função

function exibirNome(nome){
    console.log(`Olá ${nome}`)
}
exibirNome('matheus')

function exibirNumeroDobrado(numero){
    return console.log(numero * 2)
}
exibirNumeroDobrado('5')

function exibirMedia(n1, n2, n3){
    return (Number(n1) + Number(n2) + Number(n3) / 3)
}
let media = exibirMedia('5', '5', '5') // é possível guardar uma função dentro de uma variável
console.log(media)

function exibirMaior(a, b){
    if (a > b){
        return `${a} é maior`
    } else {
        return `${b} é maior`
    }
}
let maior = exibirMaior (7, 10)
console.log(maior)

function exibirMult(n){
    return n * n
}
let mult = exibirMult('10')
console.log(mult)
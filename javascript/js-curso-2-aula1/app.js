 /*let titulo = document.querySelector('h1')
 titulo.innerHTML = 'Jogo do Nº Secreto'

 let p = document.querySelector('p')
 p.innerHTML = 'Escolha um número entre 1 e 10'
*/

numeroSecreto = numeroAleatorio()

// boa prática utilizando function
function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirNaTela('h1', 'Jogo do Nº Secreto')
exibirNaTela('p', 'Escolha um número entre 1 e 10:')


 function verificarChute(){
    let chute = document.querySelector('input').value
    console.log( chute == numeroSecreto)

 }

 function numeroAleatorio(){
    return parseInt(Math.random() * 10 + 1)
 }
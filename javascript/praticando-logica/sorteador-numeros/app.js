function sortear() {
//dando as variaveis para os inputs (DOM)
let quantidade = parseInt(document.querySelector('#quantidade').value)
let de = parseInt(document.querySelector('#de').value)
let ate = parseInt(document.querySelector('#ate').value)

//faz o sorteio dos números de acordo com o número de quantidades e guarda dentro de uma lista
let sorteados = [];
let numero;
for (let i = 0; i < quantidade; i++){
    numero = obterNumeroAleatorio(de, ate)

//enquanto os números sorteados já estiverem dentro da lista, ele irá sortear novamente até que seja diferente
   while(sorteados.includes(numero)){
    numero = obterNumeroAleatorio(de, ate)
   }

//coloca os número dentro da lista
    sorteados.push(numero)
}

//mostra o resultado na tela dos números sorteados
let resultado = document.querySelector('#resultado')
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

alterarStatusBotao()
}

//gera um número aleatório inteiro incluindo o número mínimo e o número maximo
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//mudar o estilo do botão para ele ficar ativo e inativo 
function alterarStatusBotao(){
    let botao = document.querySelector('#btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}

//deixando os valores vazios, vontando com a mensagem inicial e o botao
function reiniciar(){
    document.querySelector('#quantidade').value = ''
    document.querySelector('#de').value = ''
    document.querySelector('#ate').value = ''
    document.querySelector('#resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()

}
/*let titulo = document.querySelector('h1')
 titulo.innerHTML = 'Jogo do Nº Secreto'

 let p = document.querySelector('p')
 p.innerHTML = 'Escolha um número entre 1 e 10'
*/
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

// boa prática utilizando function
function exibirNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}) // biblioteca para acessibilidade para ler o que está escrito na tela
}

function mensagemInicial(){
   exibirNaTela("h1", "Jogo do Número Secreto"); //chama a função
   exibirNaTela("p", "Escolha um número entre 1 e 100:");
}

mensagemInicial(); //chama a função

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirNaTela("h1", "Você acertou!");
    exibirNaTela("p", mensagemTentativas);

    document.querySelector('#reiniciar').removeAttribute('disabled') //remove o atributo do botão Novo Jogo caso o usuário acerte o nº secreto

  } else {
    if (chute > numeroSecreto) {
      exibirNaTela("p", "O número é menor");
    } else {
      exibirNaTela("p", "O número é maior");
    }
    tentativas++;
    limparCampo(); //função para limpar o input apos o erro
  }
}


function numeroAleatorio() {
  return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
   chute = document.querySelector('input')
   chute.value = ''
}

function reiniciarJogo(){
   numeroSecreto = numeroAleatorio();
   tentativas = 1;
   limparCampo()
   mensagemInicial();
   document.querySelector('#reiniciar').setAttribute('disabled', true)
}

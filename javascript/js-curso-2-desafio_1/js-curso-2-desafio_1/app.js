let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio!'

function verificarConsole(){
    console.log('o botão foi clicado')
}

function verificarAlerta(){
    alert('Eu amo JS')
}

function verificarPrompt(){
    let cidade = prompt('Qual o nome da sua cidade?')
    alert (`Estive em ${cidade} e lembrei de você`)
}

function verificarSoma(){
    let n1 = prompt('me dê um número')
    let n2 = prompt('agora me dê outro')
    let soma = Number(n1) + Number(n2)
    alert(`a soma de ${n1} e ${n2} é ${soma}`)
}


function calculoIMC(){
    let peso = prompt('Digite aqui seu peso:')
    let tamanho = prompt('Digite aqui seu tamanho:')
    Number.parseFloat(peso)
    Number.parseFloat(tamanho)
    let resultado = peso / (tamanho * tamanho) 
    alert(`O seu IMC é ${resultado}`)
}

function converterDolar(valor){
    let dolar = Number.parseFloat(4.80)
    valor = prompt('Quantos dolares você tem?')
    let res = valor * dolar
    alert(`parabéns, você tem ${res} reais em dolares`)
}
/* Boas prática abaixo:
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2); // toFixed(2) anda a virgula do número flutuante
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
  */

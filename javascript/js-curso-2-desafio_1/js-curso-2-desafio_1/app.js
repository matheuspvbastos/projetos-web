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
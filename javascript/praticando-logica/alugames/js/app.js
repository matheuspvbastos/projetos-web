/* Consegui fazer do meu jeito! uhul */

function alterarStatus(gameId){
    alterarBotao(gameId)
    imagemEscura(gameId)
}

function alterarBotao(gameId){
    let botao = document.querySelector(`#game-${gameId} .dashboard__item__button`);
    if(botao.classList.contains('dashboard__item__button--return')){ //se ta preto
        (botao.classList.remove('dashboard__item__button--return')) // tira o preto
        botao.classList.add('dashboard__item__button') // coloca azul 
        botao.innerHTML = 'Alugar' // e escreve alugar
    } else if (botao.classList.contains('dashboard__item__button')) { //se ta azul
        botao.classList.add('dashboard__item__button--return') // coloca preto
        botao.innerHTML = 'Devolver' // e escreve devolver
    }
}

function imagemEscura(gameId){
    let imagem = document.querySelector(`#game-${gameId} .dashboard__item__img`);
    if (!imagem.classList.contains('dashboard__item__img--rented')){ // se nao ta escuro
        imagem.classList.add('dashboard__item__img--rented') // fica escuro
    } else {
        imagem.classList.remove('dashboard__item__img--rented') // fica claro
    }
}


/* GABARITO 
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
*/
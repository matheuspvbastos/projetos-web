let totalValue = 0
limpar()
function adicionar(){
    let produto = document.querySelector('#produto').value //valor do produto
    let listaProdutos = document.querySelector('#lista-produtos') //local onde vai ficar a lista de produtos
    let quantidade = parseInt(document.querySelector('#quantidade').value) //valor das quantidades
    let total = document.querySelector('#valor-total') //resultado do total

    if(quantidade <= 0 || isNaN(quantidade) ){ //validação de erro
        alert('Digite uma quantidade válida.'); 
    } else{

        listaProdutos.innerHTML += `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${produto}</section>`;

        //CONVERSÃO DE STRING PARA NÚMERO
        let numeros = produto.replace(/[^\d]/g, ''); // Remove letras, hífens e símbolos de dólar, mantendo apenas os números
        numeros = parseInt(numeros); // Converte a string de números para um número inteiro e soma

        //calculo toda vez que adicionar um produto novo
        let calculo = quantidade * numeros
        totalValue += calculo
        total.innerHTML = `R$${totalValue}`
        //reseta o numero de quantidade
        document.querySelector('#quantidade').value = 0
    }    
}

function limpar(){
    let total = document.querySelector('#valor-total')
    totalValue = 0;
    total.innerHTML = ''
    let listaProdutos = document.querySelector('#lista-produtos')
    listaProdutos.innerHTML = ''

}

/*GABARITO
let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}
*/
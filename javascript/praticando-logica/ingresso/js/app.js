// Total disponível de ingressos
let totalPista = 100 
let totalSuperior = 200
let totalInferior = 400

function comprar(){
    let tipo = document.querySelector('#tipo-ingresso') 
    let tipoSelecionado = tipo.value ; // Tipo de ingresso selecionado pelo usuário
    let inferior = tipo.children[0]
    let superior = tipo.children[1]
    let pista = tipo.children[2]
    
    let quantidade = parseInt(document.querySelector('#qtd').value) // Quantidade de ingressos desejada
    let qtdInferior = document.querySelector('#qtd-inferior')
    let qtdSuperior = document.querySelector('#qtd-superior')
    let qtdPista = document.querySelector('#qtd-pista')

    // Estrutura `switch` para verificar o tipo de ingresso selecionado
    switch(tipoSelecionado){
        case inferior.value:
            // Verifica se a quantidade solicitada é menor ou igual ao total disponível de ingressos de Inferior
            if (quantidade <= totalInferior){
                // Subtrai a quantidade solicitada do total disponível
                totalInferior -= quantidade
                // Atualiza o elemento do DOM com o novo total disponível
                qtdInferior.innerHTML =`${totalInferior}`
            }else{
                alert('ingressos da Inferior esgotados.')
            }
        break
        
        case superior.value:
            if (quantidade <= totalSuperior){
                totalSuperior -= quantidade
                qtdSuperior.innerHTML =`${totalSuperior}`
            }else{
                alert('ingressos da Superior esgotados.')
            }
        break

        case pista.value:
            if (quantidade <= totalPista){
                totalPista -= quantidade
                qtdPista.innerHTML =`${totalPista}`
            }else{
                alert('ingressos da Pista esgotados.')
            }
        break
    }    

}

/*GABARITO
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
 */
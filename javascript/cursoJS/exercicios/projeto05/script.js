let nA = document.querySelector('input#nx') //conecta com o input de adicionar um numero
let lista = document.querySelector('select#lista') //conecta a lista
let res = document.querySelector('div#resultado') //chamando a div com os textos
let valores = [] //cria um array

function adicionar() {
    //Verificação de erro
   
    if (Number(nA.value) > 100 || Number(nA.value)< 0 || Number(nA.value) == "" ||valores.includes(Number(nA.value))  ){ //includes verifica se se tem valor repetido
        alert('Esse valor é invalido') 
    } 
    else{ //adiciona um valor dentro da array
        valores.push(Number(nA.value))
        
        //cria um elemento option dentro da lista 
        let item = document.createElement('option')
        item.text = `Valor ${Number(nA.value)} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' 
    }
    nA.value = '' // limpa o input dando certo ou dando errado
    nA.focus() // mantém selecionado o input dando certo ou errado
}

function finalizar(){  // cri uma função chamando os parametros da array valores
    
    
    if(valores.length == 0){
        alert('Insira um número antes de finalizar')
    }else {
        let total = valores.length; // mostra quantos nº estão dentro da array
        let maior = Math.max(...valores); // mostra o maior valor da array
        let menor = Math.min(...valores); // mostra o menor valor da array
        let soma = 0 //faz a soma de todos os valores dentro da array
        for (let i = 0; i < valores.length; i++) 
            { soma += valores[i];         
        }
        let media = soma / total; // faz a média aritimética
    
    res.innerHTML = `<p> Ao todo temos ${total} números cadastrados. </p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
    res.innerHTML += `<p> Somando todos os valores temos ${soma}. </p>`
    res.innerHTML += `<p> A média dos valores digitados é ${media}. </p>`
    }
    
}






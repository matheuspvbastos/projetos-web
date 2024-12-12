let valores = [] //cria um array

function adicionar() {
let nA = document.querySelector('input#nx') 
let lista = document.querySelector('select#lista')


    //Verificação de erro
    if (Number(nA.value) > 100 || Number(nA.value)< 0 || Number(nA.value) == "" ){
        alert('Esse valor é invalido')

    } else{
        //adiciona um valor dentro da array
        valores.push(Number(nA.value)) 

        //cria um elemento option dentro da lista 
        let item = document.createElement('option')
        item.text = `Valor ${Number(nA.value)} adicionado.`
        lista.appendChild(item)
    }
}

function finalizar(){
    valores.indexOf(
        
    )
}




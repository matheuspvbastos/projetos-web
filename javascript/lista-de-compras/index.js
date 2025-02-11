const inputItem = document.querySelector('#input-item');
const listaDeCompras = document.querySelector('#lista-de-compras')
const botaoAdicionar = document.querySelector('#adicionar-item');
let contador = 0

botaoAdicionar.addEventListener("click", (evento) =>{ 
    evento.preventDefault(); // previbe que a página recarregue ou vá para outra página
    if(inputItem.value === ""){
        alert('Por favor, insira um item!')
        return
    }
    
    const itemDaLista = document.createElement('li')
    const containerItemDaLista = document.createElement('div')
    containerItemDaLista.classList.add('lista-item-container')
    const inputCheckbox = document.createElement('input')
    inputCheckbox.type = 'checkbox'
    inputCheckbox.id = 'checkbox-' + contador++
    const nomeItem = document.createElement('p')
    nomeItem.innerText = inputItem.value

    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem)

    itemDaLista.appendChild(containerItemDaLista)
    listaDeCompras.appendChild(itemDaLista)
    

})
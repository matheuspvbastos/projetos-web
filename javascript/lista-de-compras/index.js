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

    //Evento para riscar o item da lista se ele for clicado
    inputCheckbox.addEventListener('click', function() {
        if (inputCheckbox.checked){
            nomeItem.style.textDecoration = 'line-through'
        } else {
            inputCheckbox.style.textDecoration = 'none'
        }
    } )

    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem)
    itemDaLista.appendChild(containerItemDaLista)

    //Mostrando a hora do item na lista de compras
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long" //metodo para o new Date para mostrar o dia da semana
    });
    const data = new Date().toLocaleDateString("pt-BR") //metodo para o new Date para mostrar o Local da data
    const hora = new Date().toLocaleTimeString("pt-BR", {
        minute: "numeric",
        hour: "numeric"
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    const itemData = document.createElement('p')
    itemData.innerText = dataCompleta
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData)
    listaDeCompras.appendChild(itemDaLista)

 
    

})
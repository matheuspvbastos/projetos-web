function calcule(){
   var nx = document.querySelector('input#nx') // guarda o valor do input 
   var tab = document.querySelector('select#calculadora') //guarda o select 
   var n = Number(nx.value) //transforma o valor do input em número

   if(nx.value == "") { // se for igual a valor vazio mostra um erro
    alert('Preciso de um número')
   } else { // se não, limpa o resultado da tabela  e faz o calculo
    tab.innerHTML = ""
    for (var i = 1; i <= 10; i++) { // valor inicial 1 até o número o 10 acrescentando de 1 em 1.
        var item = document.createElement('option') //cria um elemento dinâmino no HTML, que é o filho de select e guarda numa variavel chamada item

        item.text = `${n} x ${i} = ${n * i}` //faz o calculo onde irá imprimir dentro do option
        
        tab.appendChild(item) // imprime o resultado na tela o elemento filho do select que no caso é o option
    } }
    
/*
    n1.innerHTML = `${nx} x 1 = ${nx * 1}`
    n2.innerHTML = `${nx} x 2 = ${nx * 2}`
    n3.innerHTML = `${nx} x 3 = ${nx * 3}`
    n4.innerHTML = `${nx} x 4 = ${nx * 4}`
    n5.innerHTML = `${nx} x 5 = ${nx * 5}`
    n6.innerHTML = `${nx} x 6 = ${nx * 6}`
    n7.innerHTML = `${nx} x 7 = ${nx * 7}`
    n8.innerHTML = `${nx} x 8 = ${nx * 8}`
    n9.innerHTML = `${nx} x 9 = ${nx * 9}`
    n10.innerHTML = `${nx} x 10 = ${nx * 10}`
*/

}

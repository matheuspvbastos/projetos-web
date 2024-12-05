let valores = [3, 4, 6, 8, 9, 2]

//console.log(valores) mostra todos os valores dentro da array
/*
console.log(valores[0]) //mostra o elemento com indice zero e assim sucessivamente
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


//Criação de um Looping para mostrar todos os valores dentro da array
// variavel; condição; incrementação
for (let pos = 0; pos < valores.length; pos++ ) {
    console.log (``)
}
*/

//Forma simplificada de mostrar todos os valores dentro da lista
for (let pos in valores ){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}` )
}


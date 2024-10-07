var idade = 5
console.log(`Você tem ${idade} de idade`)

if (idade < 16){ 
    console.log('Não Vota') //se for verdadeiro faz isso
} else // se não, faz o que ta embaixo
    if (idade < 18 || idade > 65) {
        console.log('Voto Opcional') // se tiver 18 ou menos OU 65 ou mais faz isso
    } else { // se não faz o que ta embaixo 
    console.log('Voto Obrigatório') 
}
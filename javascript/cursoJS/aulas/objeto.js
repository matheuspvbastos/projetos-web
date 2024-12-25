let amigo = {  
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){  //função dentro de um objeto 
        console.log('Engordou')
        this.peso += p 
    } 
}
amigo.engordar(2)
console.log(`${amigo.nome} tem o sexo ${amigo.sexo} e tem o peso de ${amigo.peso}Kg `)
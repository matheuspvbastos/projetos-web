var agora = new Date()
var hora = agora.getHours()  // <- coloque aqui o horario e veja 

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 6 && hora <= 12) {
    console.log('Bom dia!')

} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde!')

} else if (hora >= 18 && hora <= 23 ) {
    console.log ('Boa noite!') 

} else if (hora >= 0 && hora <= 5 ){
    console.log('Boa madrugada!')
  }

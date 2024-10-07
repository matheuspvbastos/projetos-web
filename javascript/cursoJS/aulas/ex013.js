var agora = new Date()
var diaSem = agora.getDay()
// var diaSem = 7 caso forçe uma escolha invalida, utilizar o default dentro do switch 
/* 
Para o JavaScript ele vê os dias da semana:
Domingo = 0 
Segunda = 1
Terça = 2
Quarta = 3 
Quinta = 4
Sexta = 5 
*/

switch(diaSem){
    case 0 : console.log('Domingo')
        break // o break é muito importante para parar o código depois de escolher
    case 1 : console.log('Segunda')
        break
    case 2 : console.log('Terça')
        break
    case 3 : console.log('Quarta')
        break
    case 4 : console.log('Quinta')
        break
    case 5 : console.log('Sexta')
        break
    case 6 : console.log('Sábado')
        break
    default: console.log('ERRO Data Iválida!')
        break
}


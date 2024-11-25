function verificar() {
    var data = new Date() //transforma a variavel data em valor de data 
    var ano = data.getFullYear() //definiu data como ano
    var formAno = document.querySelector('input#txtano') //guarda o valor do ano de nascimento 
    var res = document.querySelector('div#res') 
    // mostra o resultado dos dados na tela, sendo ele Homem ou Mulher com X anos
    
    if ( Number(formAno.value) == 0 || Number(formAno.value) > ano) { // Se o Número do valor de ano de nascimento for igual a zero OU maior que o ano ele vai mostrar um erro
        alert('Verifique os dados e tente novamente')

    } else{ // se não, ele irá mostrar o resultado:

        var idade = ano - Number(formAno.value) //calculo entre a ano atual - o ano de nascimento da pessoa para mostrar a idade

        var fsex = document.getElementsByName('radsex') //guarda o valor do nome do Sexo numa variavel 

        var genero = '' //guarda o valor do genero se é Homem ou Mulher por isso fica vazio

         img = document.createElement('img') //criar um elemento para colocar uma imagem dinamicamente
        img.setAttribute('id', 'foto') //define que o img criado a cima dê a ele um ID chamado de foto

        //SE FOR HOMEM
        if(fsex[0].checked) {
            genero = 'Homem'
            if( idade >= 0 && idade < 10 ){
                //BEBE
                img.setAttribute('src', 'img/bebe-homem.png') // coloca a imagem de acordo com o endereço dela
            } else if( idade < 21){
                //JOVEM
                img.setAttribute('src', 'img/jovem-homem.png')
            } else if( idade < 50){
                //ADULTO
                img.setAttribute('src', 'img/adulto-homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'img/idoso-homem.png')
            }

        //SE FOR MULHER        
        } else if (fsex[1].checked){ 
            genero = 'Mulher'
            if( idade >= 0 && idade < 10 ){
                //BEBE
                img.setAttribute('src', 'img/bebe-mulher.png')
            } else if( idade < 21){
                //JOVEM
                img.setAttribute('src', 'img/jovem-mulher.png')
            } else if( idade < 50){
                //ADULTO
                img.setAttribute('src', 'img/adulto-mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'img/idosa-mulher.png')
            }
        }
        
        res.innerHTML = `Voce é ${genero} com ${idade} anos.` // mostra o resultado do seu genero e sua idade

        res.appendChild(img) // puxa a imagem criada dinamicamente
    }
}
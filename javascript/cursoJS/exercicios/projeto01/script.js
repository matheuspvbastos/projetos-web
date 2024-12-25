function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var dia = data.getDate() 
    var mes = data.getMonth() + 1
    var ano = data.getFullYear()   

    
    msg.innerHTML = 
    `<h1> Hoje é ${dia}/${mes}/${ano} <h1>
    <h3> Agora são ${hora} horas e ${min} minutos e ${seg} segundos <h3>`

    if (hora >= 0 && hora <= 12) {
        //console.log('Bom dia!')
        img.src = 'img/manha.jpg'
        document.body.style.background = '#c2bf25'
    
    } else if (hora >= 12 && hora <= 18) {
        //console.log('Boa tarde!')
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#c28325'
        
    
    } else {
       //console.log ('Boa noite!')
       img.src = 'img/noite.jpg'
       document.body.style.background = '#1d0053'


    } 
}

carregar(); 
setInterval(carregar, 1000); 


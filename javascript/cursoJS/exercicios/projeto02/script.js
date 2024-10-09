function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //definiu o ano atual
    var formAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(formAno.value.length == 0 || formAno.value > ano){
        alert('Verifique os dados e tente novamente')
    }




}
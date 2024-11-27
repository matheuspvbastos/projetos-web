function contar(){

var formInicio = document.querySelector('input#ninicio')
var formFim = document.querySelector('input#nfim')
var formPasso = document.querySelector('input#npasso')

   if ( Number(formInicio.value)  == "" || Number(formFim.value) == "" || Number(formPasso.value) == ""){
    alert('Você não tem um número')
   } 
}
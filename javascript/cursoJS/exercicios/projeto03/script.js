function contar(){

var formInicio = document.querySelector('input#ninicio')
var formFim = document.querySelector('input#nfim')
var formPasso = document.querySelector('input#npasso')

   if ( Number(formInicio.value)  == "" || Number(formFim.value) == "" || Number(formPasso.value) == ""){
    resultado.innerHTML = "Impossível Contar."
   } else {
      resultado.innerHTML = ""; // Limpar o resultado anterior 
      var n1 = Number(formInicio.value);
      var n2 = Number(formFim.value); 
      var passo = Number(formPasso.value);

      // Verificar se o passo é maior que zero 
      if (passo <= 0) { 
         resultado.innerHTML = "Passo precisa ser maior que zero."; 
      }

      for (var i = n1; i <= n2; i += passo) { 
         contando.innerHTML = 'Contando:'
         resultado.innerHTML += `${i} \u{1F449}`; 

      }
   }
}
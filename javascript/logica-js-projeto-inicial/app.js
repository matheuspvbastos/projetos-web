alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
let tentativas = 1;

// enquanto chute nao for irmao ao numeroSecreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');

    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
        
    } else {
        if (chute > numeroSecreto)
            alert ('o número secreto é menor que ' + chute);
        else {
            alert ('o número secreto é maoir que ' + chute);
        }
        tentativas++ ;
    }

}

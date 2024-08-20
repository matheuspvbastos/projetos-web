//notificação na tela (mensagem da notificação)
alert('Boas-vindas ao jogo do número secreto');

//declaração de variavél
let numeroSecreto = 5;

//imprimir a declaração numeroSecreto que no caso é o 5
console.log(numeroSecreto);

//declaração para armazenar o chute
let chute

//enquanto chute não for igual ao numeroSecreto
while(chute != numeroSecreto) {
    //para pessoa escrever ou responder o que estiver dentro do prompt
    chute = prompt('Escolha um número entre 1 e 10');

    //SE chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
        //a variavel junto com a string deverá ser colocada entre crases

    }//SENÃO 
    else {                      
        //SE
        if (chute > numeroSecreto)
            alert (`O número secreto é menor que ${chute}`);
        
            //SENÃO
            else {
            alert (`O número secreto é maior que ${chute}`);
        }   
    }
}
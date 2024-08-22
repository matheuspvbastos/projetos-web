//notificação na tela (mensagem da notificação)
alert('Boas-vindas ao jogo do número secreto');

//declaração de variavél
let numeroSecreto = 5;

//imprimir a declaração numeroSecreto que no caso é o 5
console.log(numeroSecreto);

//declaração para armazenar o chute
let chute

let tentativas = 1;
//iremos mostrar a quantidade de tentativas, sendo que sempre será uma tentativa de inicio

//enquanto chute não for igual ao numeroSecreto
while(chute != numeroSecreto) {
    //para pessoa escrever ou responder o que estiver dentro do prompt
    chute = prompt('Escolha um número entre 1 e 10');

    //SE chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas` );
        //a variavel junto com a string deverá ser colocada entre crases

    }//SENÃO irá perguntar de novo dizendo se é maior ou menor
    else {                      
        if (chute > numeroSecreto) { //SE for maior o número, irá dizer que é menor
            alert (`O número secreto é menor que ${chute}`);
        } else { //SENÃO for menor que o número, ira dizer que é maior
            alert (`O número secreto é maior que ${chute}`);
        }
    }
    //feito para atribuir mais 1 
    //tentativas = tentativas + 1; FUNCIONA IGUAL
    tentativas ++; 
}
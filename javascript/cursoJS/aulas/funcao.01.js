function parimpar(n){ //  dentro de () fica os parametros 
    if (n%2 == 0) { //ação
        return 'Par' //retorno 
    } else {
        return 'Ímpar'//retorno
    }
}

let res = parimpar(10) //chamada
console.log(res)

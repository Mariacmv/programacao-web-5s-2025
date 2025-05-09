function verificarNumeroPrimo(n) { //parâmetros são variáveis que são utilizadas apenas dentro da função
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) { //operador de comparação estrita
            return false;
        }
    }
    return true;
}

console.log(verificarNumeroPrimo(0));//false
console.log(verificarNumeroPrimo(1));//false
console.log(verificarNumeroPrimo(2));//true
console.log(verificarNumeroPrimo(3));//true
console.log(verificarNumeroPrimo(7));//true
console.log(verificarNumeroPrimo(83));//true
console.log(verificarNumeroPrimo(100));//false
console.log(verificarNumeroPrimo(991));//true
console.log(verificarNumeroPrimo(104729));//true
console.log(verificarNumeroPrimo(14348907));//false

//Importância dos números primos na computação:
//  Exemplo: criptografia


//Outra alternativa:
function verificarNumeroPrimo(n){
    if(n < 2){
        return false;
    }
    if(n <= 3){
        return true;
    }
    if(n % 2 == 0){
        return false;
    }

    for(let i = 3; i < n; i += 2){
        if(n % i == 0){
            return false;
        }
    }

    return true; //passado por todas as condições 
}

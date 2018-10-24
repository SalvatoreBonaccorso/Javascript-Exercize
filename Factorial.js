# Javascript-Exercize

/* Si sviluppi una funzione che calcola il fattoriale di un
numero in ingresso */

var fact = function (number) {
    var factorial = 1;
    for (var i = 2; i <= (number - 1); i++) {
        factorial = factorial * i;
    }
    return "This is a factorial of " + number + " : " + factorial;
}

console.log(fact(10));
console.log(fact(5));

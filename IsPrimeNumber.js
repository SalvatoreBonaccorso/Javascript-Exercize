# Javascript-Exercize

/* Si sviluppi una funzione che dato un input numero in
ingresso, valuti che il numero sia primo. */

var isPrimeNumber = function (number) {
    for (var i = 2; i <= (number - 1); i++) {
        console.log(i);
        if (number % i == 0) {
            return "Il numero " + number + " non è un numero primo";
        }
    }
    return "Il numero " + number + " è un numero primo";
}

console.log(isPrimeNumber(10));

# Javascript-Exercize

/*  STEP 1
Implementare una funzione che riceve in ingresso tre
campi numerici, che rappresentino la lunghezza di 3
segmenti, si verifichi se i 3 segmenti possano formare un
triangolo. */

/* STEP 2 
Implementare una funzione che riceve in ingresso tre
campi numerici, che rappresentino la lunghezza di 3
segmenti, si verifichi se i 3 segmenti possano formare un
triangolo rettangolo || isoscele || scaleno! */



var isTriangle = function (n1, n2, n3) {
    var max = Math.max(n1, n2, n3);
    var value = (n1 + n2 + n3) - max;
    if (value > max) {
        return true;
    }
    else {
        return false;
    }
}

var typeOfTriangle = function (n1, n2, n3) {
    // verifico se è un triangolo
    if (isTriangle(n1, n2, n3)) {
        // se si procedo con il mio algoritmo
        if (n1 == n2 && n2 == n3) {
            return "Il triangolo è equilatero";
        }
        if (n3 != n2 && n2 == n1) {
            return "Il triangolo è isoscele";
        }
        if (sideA != n2 && n2 == n3) {
            return "Il triangolo è isoscele";
        }
        if (n1 != n2 && n2 != n3) {
            return "Il triangolo è scaleno!";
        }
    }
    else {
        return "Non è un triangolo"
    }
}
// invocazione delle funzioni 
console.log(isTriangle(4, 1, 2));
console.log(typeOfTriangle(4, 1, 2));

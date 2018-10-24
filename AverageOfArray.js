# Javascript-Exercize

/* Si sviluppi una funzione che dato un input array di numeri,
ritorni in uscita la media. */

var media = function (array) {
    var sum = 0;
    var avg = "";
    for (elem of array) {
        sum += elem;
    }
    avg = sum / (array.length);
    return "la media è : " + avg;
}

console.log(media([1,6]));


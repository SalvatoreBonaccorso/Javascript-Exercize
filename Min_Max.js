# Javascript-Exercize

/* Si sviluppi una funzione che dato un input array di numeri,
ritorni in uscita il massimo ed il minimo come json. */

function getMax(array) {
    var max = Math.max.apply(null, array);
    return JSON.stringify({ max });
}

function getMin(array) {
    var min = Math.min.apply(null, array);
    return JSON.stringify({ min });
}

console.log("Dato l'array : " + [10, 8, 17, 0, 2]);
console.log("Il minimo è: " + getMin([10, 8, 17, 0, 2]));
console.log("Il massimo è: " + getMax([10, 8, 17, 0, 2]));

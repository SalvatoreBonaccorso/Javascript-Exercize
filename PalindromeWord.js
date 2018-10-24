# Javascript-Exercize

/* Si sviluppi una funzione che dato un input di tipo stringa, ritorni
true/false a seconda la stringa rappresenti una parola
palindroma o meno.  */

var reverseString = function (str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Conditions if true or false
    if (str == joinArray) {
        return true;
    }
    else {
        return false;
    }
}

console.log("hello : " + reverseString("hello"));
console.log("anna : " + reverseString("anna"));

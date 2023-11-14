/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50. */

'use strict';

const numeriUtente = [];
let sommaNumeri = 0;
let i = 0; // per scorrere l'array

/* while (sommaNumeri < 50) {
    numeriUtente.push(+prompt('inserisci un numero: ')); // chiedo all'utente numeri
    sommaNumeri += numeriUtente[i];
    console.log(sommaNumeri);
    i++;
} */

/* for (let y = 0; sommaNumeri < 50; y++) {
    numeriUtente.push(+prompt('inserisci un numero: ')); // chiedo all'utente numeri
    sommaNumeri += numeriUtente[y];
    console.log(sommaNumeri);
} */

do {
    numeriUtente.push(+prompt('inserisci un numero: ')); // chiedo all'utente numeri
    sommaNumeri += numeriUtente[i];
    console.log(sommaNumeri);
    i++;
} while (sommaNumeri < 50);
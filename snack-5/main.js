'use strict';

/* Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo. */

const n = +prompt('inserisci un numero di array da creare: ');

for (let i = 0; i < n; i++) { // creo n array
    const numeriRandom = [];
    for (let y = 0; y < 10; y++) {
        numeriRandom.push(Math.floor(Math.random() * 100 + 1)); // pusho 10 numeri random
    }
    alert(numeriRandom);
}
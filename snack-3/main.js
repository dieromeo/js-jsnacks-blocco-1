'use strict';

let sommaNumeri = 0; // somma dei numeri

for (let i = 0; i < 10; i++) { // ciclo per chiedere dati all'utente
    const numeroUtente = parseInt(prompt('Inserisci un numero'));
    sommaNumeri += numeroUtente;
}

console.log(sommaNumeri); // stampa la somma
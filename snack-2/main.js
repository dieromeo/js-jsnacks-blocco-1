'use strict';

/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const primaParola = prompt("Inserisci la prima parola");
const secodaParola = prompt("Inserisci la seconda parola");

if (primaParola.length < secodaParola.length) { // stampo la prima
    console.log(primaParola);
    console.log(secodaParola);
}
else if (primaParola.length === secodaParola.length) { // sono uguali
    console.log('le parole hanno la stessa lunghezza');
}
else { // stampo prima la seconda
    console.log(secodaParola);
    console.log(primaParola);
}

/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1 // variabile i non dichiarata 
let i = 0;
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2 //errore 2 = 0 // aggiunge un numero alla somma totale solo se il numero è pari, ritorna il numero 
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}



// ESERCIZIO 3 // prende "numero iniziale" e "numero finale" e restituisce una lista che come primo numero avrà "numero iniziale "e come ultimo numero "numero finale", e nel mezzo i numeri compresi : risultato : 0 1 2 3 4 5

function loopToFive() {
    for (let i = 0, i <= 5; i++) {
        console.log(i);
    }

}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori) // stampa tutti i numeri pari prendendo in considerazione in questo caso un array di numeri da 1 a 8
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {     
        if (numbers % 2 === 0); {                       //2 = 0
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
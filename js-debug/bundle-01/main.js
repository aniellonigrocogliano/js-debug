/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// dovrebbe stampare i ma poichè i è impostato a 5 non stampa nulla 

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
// il simbolo di uguaglianza è sabagliato invece di = dovrebbe essere == o ===
// la funzione se passata un numero pari ritorna il numero aumentato di 5 altrimenti ritorna il numero stesso

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// il for ritorna i che va da  0 a 4 

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for ( let i = 0; i < numbers.length ;i++) { 
        if (numbers[i]% 2 === 0) { // = invece dell == o ===
            evenNumbers.push(numbers[i]);
            console.log(numbers[i])
        }
        
    }return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]
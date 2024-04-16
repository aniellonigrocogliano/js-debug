/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message; // aggiunto return
}
 console.log(checkAge()); // aggiunto console.log

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    let string ="";
    for (let i = 0; i < colors.length; i++) {
      string += colors[i] + " ";
         
    }
   console.log(`Nella mia palette ci sono ${string} colori!`); // mancava ciclo for e variabile d'appoggio
}
printColorsNumber();


// ESERCIZIO 3
function addNumbers() {
    let userNumber = prompt('Inserisci un numero');
    userNumber =  parseInt(userNumber); // bisognava trasformare stringfa in itero
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
/**
 * Description placeholder
 */
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false // true e false erano salvate come stringhe e non come booleani

    if (addresses.includes(userEmail)) {
        grantAccess = true
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

 let userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length < i) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved()}
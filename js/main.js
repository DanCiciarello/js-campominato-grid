/* 
Consegna:
Generare una griglia di gioco quadrata,
in cui ogni cella contiene un numero incrementale
tra quelli compresi tra 1 e 100.
Quando l’utente clicca su ogni cella,
la cella cliccata si colora di azzurro.

Bonus:
L’utente indica un livello di difficoltà in base
al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella,
la cella cliccata si colora di azzurro.
*/

/* ------------------------------------------ */

// Recupero gli elementi dal dom
let userInputLevelElement = document.getElementById("userInputLevel");
let generateBtnElement = document.getElementById("generateBtn");

// Aggiungo un event listener al tasto Conferma
generateBtnElement.addEventListener("click", function(){

    // Recupero il livello inserito dall'utente
    let userInputLevel = parseInt(userInputLevelElement.value);

    // In base al livello inserito genero una griglia diversa
    if (userInputLevel == 1) {
        generateGrid(10,10);
    } else if (userInputLevel == 2) {
        generateGrid(9,9);
    } else if (userInputLevel == 3) {
        generateGrid(7,7);
    } 

})


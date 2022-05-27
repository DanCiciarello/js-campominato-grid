/* Genera una sequenza di numeri incrementali
tra un minimo ed un massimo */

function generateNumArray(min, max) {
    
    // Controllo che i numeri inseriti siano corretti
    if (min > max || isNaN(min) || isNaN(max)) {
        return;
    }

    // Creo l'array da riempire
    let numArray = [];

    // Ciclo dal numero minimo a quello massimo
    for (i = min; i <= max; i++) {
        let numToInsert = i;
        numArray.push(numToInsert);
    }

    return numArray;

};


/* ------------------------------------------ */

/* Genera una griglia con una larghezza, una altezza
e un array di numeri da stampare all'interno di ogni cella */

let gridElement = document.querySelector("grid");

function generateGrid(sideX, sideY) {

    /* Idea:
    Moltiplico il num x e il num y
    Uso il risultato come num max da usare nella funzione sopra
    Ciclo l'array per generare ogni cella
    Ci stampo dentro l'indice
    Aggiungo l'event listener al click */

    // Calcolo la larghezza della griglia nel dom
    gridElement.style.width = `50px * ${sideX}`;

    // Calcolo il numero totale di celle della griglia
    let numMax = sideX * sideY;

    // Calcolo l'array di celle totali che avrà la griglia
    let totalCells = generateNumArray(1, numMax);

    // Creo tutte le celle ciclando l'array generato

};

console.log(generateGrid(10,10));
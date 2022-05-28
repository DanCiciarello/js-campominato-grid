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

const gridElement = document.getElementById("grid");

function generateGrid(sideX, sideY) {

    // Resetto tutti i child precedenti
    gridElement.innerHTML = "";

    // Imposto la larghezza della griglia nel dom
    gridElement.style.width = `calc(var(--squareWidth) * ${sideX})`;

    // Calcolo il numero totale di quadrati della griglia
    let numMax = sideX * sideY;

    // Calcolo l'array di numeri totali che avrà la griglia
    let totalCells = generateNumArray(1, numMax);

    // Creo tutti i quadrati ciclando l'array generato
    for (n = 1; n <= numMax; n++) {

        // Creo l'elemento del quadrato
        let square = document.createElement("div");

        // Assegno la classe specifica
        square.classList.add("square");

        // Stampo dentro il numero incrementale
        square.innerHTML = `${n}`;

        // Aggiungo l'event listener al click
        square.addEventListener("click",function(){
            this.classList.add("cdBlueBg");
        })

        // Aggiungo l'elemento al dom
        gridElement.appendChild(square);

    }

};
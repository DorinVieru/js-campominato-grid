// FUNZIONE CHE CREA LA SINGOLA CASELLA DELLA GRIGLIA
function createCell(num, numPerSide) {
    const element = document.createElement("div");
    element.classList.add("square");

    let sideLength = `calc(100vw / ${numPerSide} - 17px)`;
    const grid = document.getElementById("grid");

    element.style.width = sideLength;
    element.style.height = sideLength;

    element.innerText = num;

    return element;
}


// CREO FUNZIONE CHE MI GENERA LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA'
function createNewGame() {
    document.getElementById("grid").innerHTML = "";

    let levelSelector = document.getElementById("difficulty");
    let level = parseInt(levelSelector.value);

    let cellsNumber;
    let cellsPerSide;

    // DETERMINAZIONE DELLE CASELLE PER LIVELLO
    switch (level) {
        case 1:
            cellsNumber = 100
            cellsPerSide = 10
            break;
        case 2:
            cellsNumber = 81
            cellsPerSide = 9
            break;
        case 3:
            cellsNumber = 49
            cellsPerSide = 7
            break;
        default:
            cellsNumber = 100
            cellsPerSide = 10
    }

    createPlayGround(cellsNumber, cellsPerSide)
}


// FUNZIONE CHE CONSENTE AL CLICK SUL BOTTONE PLAY DI FAR COMPARIRE LA GRIGLIA DI GIOCO
function createPlayGround(totalCells, cellsPerSide){
    
    // RECUPERO L'ELEMENTO CHE CONTIENE LA GRIGLIA
    const grid = document.getElementById("grid");

    // ESEGUO UN FOR
    for (let i = 0; i < totalCells; i++) {
        // CREO LA CELLA
        let square = createCell(i + 1, cellsPerSide);
    
        // BONUS: AD OGNI CLICK NELLA CASELLA DELLA GRIGLIA, QUELL'ELEMENTO CAMBIA COLORORE E ME LO MOSTRA ANCHE IN CONSOLE.LOG
        square.addEventListener("click", function () {
            this.classList.toggle("clicked");
            console.log(this);
        })
    
        // APPENDO LA CELLA ALLA GRIGLIA
        grid.appendChild(square);
    }

}


// CREO EVENTO IN ASCOLTO CHE CONSENTE DI CLICCARE IL BOTTONE E FAR PARTIRE IL GIOCO IN BASE ALLA DIFFICOLTA' SELEZIONATA
document.getElementById("play").addEventListener("click", function () {
    createNewGame();
})
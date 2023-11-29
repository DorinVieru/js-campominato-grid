// FUNZIONE CHE CREA LA SINGOLA CASELLA DELLA GRIGLIA
function createCell(num) {
    const element = document.createElement("div");
    element.classList.add("square");

    element.innerText = num;

    return element;
}

// RECUPERO L'ELEMENTO CHE CONTIENE LA GRIGLIA
const grid = document.getElementById("grid");

// FUNZIONE CHE CONSENTE AL CLICK SUL BOTTONE PLAY DI FAR COMPARIRE LA GRIGLIA DI GIOCO
function createNewGame() {
    document.getElementById("grid").innerHTML = "";

    // ESEGUO UN FOR
    for (let i = 0; i < 100; i++) {
        // CREO LA CELLA
        let square = createCell(i + 1);

        // BONUS: AD OGNI CLICK NELLA CASELLA DELLA GRIGLIA, QUELL'ELEMENTO CAMBIA COLORORE E ME LO MOSTRA ANCHE IN CONSOLE.LOG
        square.addEventListener("click", function () {
            this.classList.toggle("clicked");
            console.log(this);
        })

        // APPENDO LA CELLA ALLA GRIGLIA
        grid.appendChild(square);
    }
}

// CREO EVENTO IN ASCOLTO CHE CONSENTE DI CLICCARE IL BOTTONE E FAR PARTIRE IL GIOCO
document.getElementById("play").addEventListener("click", function () {
    createNewGame();
})
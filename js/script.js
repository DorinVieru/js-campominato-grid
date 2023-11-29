// FUNZIONE CHE CREA LA SINGOLA CASELLA DELLA GRIGLIA
function createCell(num) {
    const element = document.createElement("div");
    element.classList.add("square");

    element.innerText = num;

    return element;
}

// RECUPERO L'ELEMENTO CHE CONTIENE LA GRIGLIA
const grid = document.getElementById("grid");


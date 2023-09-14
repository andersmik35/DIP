// gui.js

// Importér funktioner og array fra logikfilen
import { addPerson, findPerson, filterByAge, personer } from '.logic.js';

// Lyt efter klik på Tilføj-knappen og udfør handlingen
let knap = document.querySelector("#addButton");
knap.onclick = () => {
    let navn = document.querySelector("#navn").value;
    let alder = parseInt(document.querySelector("#alder").value);
    if (!isNaN(alder)) {
        // Brug funktionen fra logikfilen til at tilføje personen
        addPerson(navn, alder);
        document.querySelector("#Vispersoner").innerHTML = generateTable();
    } else {
        alert("Not a number");
    }
};

// Funktion for at generere tabellen med personer
function generateTable() {
    let retur = "<table>";
    for (let person of personer) {
        retur += `<tr><td>${person.navn}</td><td>${person.alder}</td></tr>`;
    }
    retur += "</table>";
    return retur;
}

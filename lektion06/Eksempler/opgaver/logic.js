// personer.js

// Opret arrayet til opbevaring af personer
let personer = [];

// Funktion for at tilføje en person til arrayet
function addPerson(navn, alder) {
    personer.push({ navn: navn, alder: alder });
}

// Funktion for at finde en person baseret på navn
function findPerson(navn) {
    return personer.find((person) => person.navn === navn);
}

// Funktion for at filtrere personer baseret på alder
function filterByAge(alder) {
    return personer.filter((person) => person.alder === alder);
}

// Eksporter funktionerne, så de kan bruges i andre filer
export { addPerson, findPerson, filterByAge, personer };



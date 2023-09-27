const person = [
  { id: 1, name: "Bob", age: 20, mobileNumber: "12345678" },
  { id: 2, name: "Alice", age: 22, mobileNumber: "87654321" },
  { id: 3, name: "John", age: 25, mobileNumber: "11223344" },
];


// 1. Udskriv alle personer
person.forEach((element) => console.log(element));


// Find person med bestemt mobilnummer
function findPerson(mobileNumber) {
  return person.find((element) => element.mobileNumber === mobileNumber);
}
console.log("-----------------------------------------------------------------")
console.log(findPerson("87654321"));



//Find person med mindste alder
function findPersonMinAge() {
  return person.reduce((min, element) => element.age < min.age ? element : min);
}
console.log("-----------------------------------------------------------------")
console.log(findPersonMinAge());


// Modificer array så man får fortløbende id
person.forEach((element, index) => element.id = index + 1);
console.log("-----------------------------------------------------------------")
console.log(person);

//Generer en tekstrend der indeholder personernes navne, komma-separeret
console.log("-----------------------------------------------------------------")
function sortedNames() {
    return person.map((person) => person.name).sort().join(", ");
}
console.log(sortedNames());


console.log("-----------------------------------------------------------------")
// Generer et array med navn og mobilnummer på de personer der er yngre end 30 år
function youngPersons() {
    return person.filter((person) => person.age < 30).map((person) => {return {
        name: person.name, 
        mobileNumber: person.mobileNumber}});
}

console.log(youngPersons());


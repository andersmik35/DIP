function compareSort(compareFunction) {
  return function (arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Argument is not an array");
    }
    return [...arr].sort(compareFunction);
  };
}

function compareLen(a, b) {
  return a.length - b.length;
}

function compareIgnoreCase(a, b) {
  const stringA = a.toLowerCase();
  const stringB = b.toLowerCase();
  if (stringA < stringB) {
    return -1;
  }
  if (stringA > stringB) {
    return 1;
  }
  return 0;
}

const lengthSort = compareSort(compareLen);
const ignoreCaseSort = compareSort(compareIgnoreCase);

//Eksempler
const arr = ["Bob", "Alice", "John"];
console.log(lengthSort(arr));
console.log(ignoreCaseSort(arr));

//Tjekker for modificiation af array hvis det ikke er array som argument
//Opgave 9.3

console.log("-----------------------------------------------------------------");
console.log(lengthSort("Bob"));

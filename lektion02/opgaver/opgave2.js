const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const max = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

const contains = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
};

const sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log("Opgave 2.1:");
console.log("Det største tal i arrayet er " + max(array));
console.log("Indeholder array tallet 5? " + contains(array, 5));
console.log("Summen af arrayet er: " + sum(array));
console.log("");

//Opgave 2.2
console.log("Opgave 2.2:");

const array2 = [2, 5, 1, 6, 4];

function bubbleSort2(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}
bubbleSort2(array2);
console.log(array2);

function swap(array, i1, i2) {
  let temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
}

console.log("");
console.log("Opgave 2.2:");

const list1 = [2, 4, 1, 5];

function binarySearch(list, target) {
  let index = -1;
  let left = 0;
  let right = list.length - 1;
  while (index === -1 && left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (list[middle] === target) {
      index = middle;
    } else if (list[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return index;
}

//returnere 1 hvis tallet findes, returnere -1 hvis tallet ikke findes
console.log("Tallet findes på index " + binarySearch(list1, "b"));

const compare = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

const compareLength = (a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  } else {
    return 0;
  }
};

const compareIgnoreCase = (a, b) => {
  return compare(a.toLowerCase(), b.toLowerCase());
};

function bubbleSort(array, compare) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (compare(array[j], array[j + 1]) > 0) {
        swap(array, j, j + 1);
      }
    }
  }
}

console.log("");
console.log("Opgave 2.3:");
console.log("Compare" + compare("a", "b"));
console.log("CompareLength" + compareLength("a", "b"));
console.log("CompareIgnoreCase" + compareIgnoreCase("a", "B"));

const list2 = ["b", "a", "u", "g", "e", "k"];
bubbleSort(list2, compare);
console.log(list2);

console.log("");
console.log("Opgave 2.4:");

const str = "Hej jeg hedder Gustav";

function countWords(str) {
  const split = str.split(" ");
  var map = {};
  for (var i = 0; i < split.length; i++) {
    if (map[split[i]] === undefined) {
      map[split[i]] = 1;
    } else {
      map[split[i]]++;
    }
  }
  return map;
}

function printMap(map) {
  for (let key in map) {
    console.log(key + ": " + map[key]);
  }
}

printMap(countWords(str));

console.log("");
console.log("Opgave 2.5:");

const persons = [
  {
    name: "Gustav",
    email: "gustav@gmail.com",
    tlfnr: "12345678"
  },
  {
    name: "Mads",
    email: "mads@gmail.com",
    tlfnr: "87654321",
  },
  {
    name: "Mikkel",
    email: "mikkel@gmail.com",
    tlfnr: "12348765",
  },
];

console.log(persons);

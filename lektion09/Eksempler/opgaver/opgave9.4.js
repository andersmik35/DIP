function compose(f1, f2, a) {
  return f1(f2(a));
}

function square(x) {
  return x * x;
}

function addOne(x) {
  return x + 1;
}

const result = compose(square, addOne, 2);
console.log(result); // => 9

console.log(
  "-----------------------------------------------------------------"
);

function compose2(f1, f2) {
  return function (x) {
    return f1(f2(x));
  };
}

const squareAddOne = compose2(square, addOne);
const result2 = squareAddOne(2);
console.log(result2); // => 9

console.log(
  "-----------------------------------------------------------------"
);

function compose3(functions) {
    return function (x) {
        return functions.reduce((acc, func) => func(acc), x);
    }
}

const functions = [square, addOne, square];
const composedFuntion = compose3(functions);
const result1 = composedFuntion(2);
console.log(result1); // => 25
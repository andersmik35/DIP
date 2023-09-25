// opgave10.1.js
class Person {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return this.navn;
  }
}

class Studerende extends Person {
  constructor(navn, id) {
    super(navn);
    this.id = id;
  }
  toString() {
    return super.toString() + ": " + this.id;
  }
}
let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let liste = [p1, p2, s1, s2];

class Animal {
  constructor(navn, alder, canRun) {
    this.navn = navn;
    this.alder = alder;
    this.canRun = canRun;
  }
  toString() {
    return this.navn + ": " + this.alder + " år" + (this.canRun ? " og kan løbe" : " og kan ikke løbe");
  }
}

let a1 = new Animal("Hund", 10, false);
let a2 = new Animal("Kat", 5, true);

console.log(a1.toString());
console.log(a2.toString());




class Kat {
  constructor(navn) {
    this.navn = navn;
  }
  toString() {
    return "Kat: " + this.navn;
  }
}

class Person {
    constructor(navn) {
      this.navn = navn;
    }
  
    toString() {
      return this.navn;
    }
  
    equals(other) {
      return other instanceof Person && this.navn === other.navn;
    }
  
    static compare(p1, p2) {
      return p1.navn.localeCompare(p2.navn);
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
  
    equals(other) {
      return other instanceof Studerende && this.navn === other.navn && this.id === other.id;
    }
  }
  
  class Kat {
    constructor(navn) {
      this.navn = navn;
    }
  
    toString() {
      return "Kat: " + this.navn;
    }
  }
  
  let p1 = new Person("Viggo");
  let p2 = new Person("Børge");
  let s1 = new Studerende("Ida", 123);
  let s2 = new Studerende("Ole", 456);
  let liste = [p1, p2, s1, s2];
  
  // Sorting by name using the compare() method
  liste.sort(Person.compare);
  
  // Adding a couple of cats
  let k1 = new Kat("Whiskers");
  let k2 = new Kat("Mittens");
  liste.push(k1, k2);
  
  // Sorting again by name
  liste.sort((a, b) => a.toString().localeCompare(b.toString()));
  
  // Printing the sorted list
  for (let item of liste) {
    console.log(item.toString());
  }
  

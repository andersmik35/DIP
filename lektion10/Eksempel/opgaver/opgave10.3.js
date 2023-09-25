class StringStack {
    constructor() {
      this.stack = [];
    }
  
    // Metoden push() tilføjer en streng øverst på stakken.
    push(item) {
      this.stack.push(item);
    }
  
    // Metoden pop() fjerner og returnerer strengen øverst på stakken.
    // Hvis stakken er tom, returnerer den undefined.
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.stack.pop();
    }
  
    // Metoden isEmpty() returnerer true, hvis stakken er tom, ellers false.
    isEmpty() {
      return this.stack.length === 0;
    }
  
    // Metoden size() returnerer antallet af elementer i stakken.
    size() {
      return this.stack.length;
    }
  }
  
  // Eksempel på brug:
  
  const stack = new StringStack();
  
  stack.push("A");
  stack.push("B");
  stack.push("C");
  
  console.log("Stakken indeholder " + stack.size() + " elementer.");
  console.log("Øverst på stakken: " + stack.pop()); // "C"
  console.log("Øverst på stakken: " + stack.pop()); // "B"
  console.log("Stakken er tom: " + stack.isEmpty()); // false
  console.log("Øverst på stakken: " + stack.pop()); // "A"
  console.log("Stakken er tom: " + stack.isEmpty()); // true
  
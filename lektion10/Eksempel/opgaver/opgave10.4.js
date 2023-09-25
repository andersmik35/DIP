class Person {
    constructor(name) {
      this.name = name;
      this.groups = new Set(); // Brug et Set for at undgå duplikater
    }
  
    // Metoden tilføjer en person til en gruppe
    addToGroup(group) {
      this.groups.add(group);
      group.addMember(this);
    }
  
    // Metoden fjerner en person fra en gruppe
    removeFromGroup(group) {
      this.groups.delete(group);
      group.removeMember(this);
    }
  
    toString() {
      return this.name;
    }
  }
  
  class Gruppe {
    constructor(name) {
      this.name = name;
      this.members = new Set();
    }
  
    // Metoden tilføjer en person til gruppen
    addMember(person) {
      this.members.add(person);
    }
  
    // Metoden fjerner en person fra gruppen
    removeMember(person) {
      this.members.delete(person);
    }
  
    // Metoden viser alle medlemmer af gruppen
    listMembers() {
      console.log(`Medlemmer af gruppen "${this.name}":`);
      this.members.forEach((person) => {
        console.log(person.toString());
      });
    }
  }
  
  // Eksempel på brug:
  
  const person1 = new Person("Alice");
  const person2 = new Person("Bob");
  
  const gruppeA = new Gruppe("Gruppe A");
  const gruppeB = new Gruppe("Gruppe B");
  
  // Opretter associering mellem personer og grupper
  person1.addToGroup(gruppeA);
  person2.addToGroup(gruppeA);
  person2.addToGroup(gruppeB);
  
  gruppeA.listMembers(); // Viser medlemmer af Gruppe A
  gruppeB.listMembers(); // Viser medlemmer af Gruppe B
  
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Sup dog, my name is ${this.name}, and yours is?`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old, so, ya know.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!(this.major);
  }
  getDescription() {
    let description = super.getDescription();
    return description += ` Their major is ${this.major}`;
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    return `${greeting} I'm visitin from ${this.location}.`;
  }
}

let bato = new Person("Carndog", 89);
let ram = new Student('Daedae', 78, 'Aerospace Bookkepping');
let blam = new Student('Trapgod', 12);
let trav = new Traveler('sauce boy', 45, 'Parts Unknown');

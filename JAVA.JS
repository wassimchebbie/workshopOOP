// Object definition
const person = { FirstName: "Wassim", LastName: "Chebbi", age: 22 };

// Class Car
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    display() {
        console.log(`${this.make} ${this.model}`);
    }
}
const MyCar = new Car("Toyota", "Corolla");
console.log(MyCar.model); // Corolla
console.log(MyCar.make);  // Toyota
MyCar.display();          // Toyota Corolla

// Class SmartPhone
class SmartPhone {
    constructor(name, color, model, storage) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.storage = storage;
    }
    afficher() {
        console.log(`Smartphone: ${this.name}\nModel: ${this.model}\nColor: ${this.color}\nStorage: ${this.storage}`);
    }
}
const Myphone = new SmartPhone("Samsung", "Rouge", "A21", "128 GB");
Myphone.afficher(); // Outputs smartphone details

// Inheritance
class vehicule extends Car {
    constructor(make, model, doors) {
        super(make, model); // Call parent constructor
        this.doors = doors;
    }
    info() {
        super.display(); // Call parent's display method
        console.log(`Doors: ${this.doors}`);
    }
}
const auto = new vehicule("Kia", "EV6", 4);
auto.info(); // Kia EV6 \n Doors: 4

// Prototype and Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
};
const p1 = new Person("Sameh", 23);
p1.greet(); // My name is Sameh, and I am 23 years old.

function Studiant(name, age, field) {
    Person.call(this, name, age); // Call the parent constructor
    this.field = field;
}
Studiant.prototype = Object.create(Person.prototype); // Inherit from Person
Studiant.prototype.constructor = Studiant;           // Fix constructor reference
Studiant.prototype.study = function () {
    console.log(`${this.name} is studying ${this.field}.`);
};
const p2 = new Studiant("Wassim", 22, "Engineering");
p2.study();  // Wassim is studying Engineering.
p2.greet();  // My name is Wassim, and I am 22 years old.

// Constructor = special method for defining the properties and methods of objects

function Car(a, b, c, d){
    this.make = a,
    this.model = b,
    this.year = c,
    this.color = d
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.color);
car1.drive();
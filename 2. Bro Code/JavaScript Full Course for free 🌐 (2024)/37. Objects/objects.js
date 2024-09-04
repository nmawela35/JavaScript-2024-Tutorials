// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("ey, I'm Patrick!...")},
    eat: function(){console.log("I am eating roasting beef, chicken and pizza")},
}

console.log(person1.firstName); //property
person1.sayHello(); //method
person1.eat(); //method
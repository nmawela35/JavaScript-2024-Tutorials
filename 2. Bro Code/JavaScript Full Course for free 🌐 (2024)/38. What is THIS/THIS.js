// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
// Does not work on arrow functions, it references to windows object

const person1 = {
    name: 'Spongebob',
    favFood: "hamburgers",
    sayHello: function(){console.log(` Hi I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat()

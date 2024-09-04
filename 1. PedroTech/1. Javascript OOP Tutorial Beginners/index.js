class House {
  constructor(address, price, residents) {
    //list of people living in the house
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  getAddress() {
    return this.address;
  }
  getPrice() {
    return this.price;
  }
  getResidents() {
    return this.residents;
  }
  addResident(resident) {
    this.residents.push(resident);
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = "";
  }

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setJob(job) {
    this.job = job;
  }
}

class Programmer extends Person{
  constructor(name, age, company, salary, language) {
    super(name, age)
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  getCompany() {
    console.log(`I work for ${this.company} and I earn ${this.salary} per annum my name is ${this.getName()}`);
  }
}

let person1 = new Person("Chris", 35);
let person2 = new Person("Christina", 45);

let house = new House("1765 Palm Ridge", 350000, [person1, person2]);
// console.log(house.getAddress());
// console.log(house.getPrice());
// console.log(house.getResidents());

// let person3 = new Person("Simon", 43);
// house.addResident(person3);
// console.log(house.getResidents());

// house.addResident(new Person("Ndivhudza", 47)); //Avoid
// //this by using above, Called Abstraction
// console.log(house.getResidents());

let person4 = new Person("Peter", 30, "Developer");
house.addResident(person4);
person4.setJob("Developer");
console.log(house.getResidents());

let programmer = new Programmer("Chris", 45, "IBM", 65000, "JavaScript")
console.log(programmer.getCompany())

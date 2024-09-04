let person = {
    name: 'Chris',
    age: 50,
    email: 'fake@gmail.com'
}
person.username = "nmawela"; //add new properties
person = {...person, id: 6679, surname: 'Mawela'} //short for above

console.log(person)

const {name, age, email} = person
console.log(name)
console.log(age)
console.log(email)




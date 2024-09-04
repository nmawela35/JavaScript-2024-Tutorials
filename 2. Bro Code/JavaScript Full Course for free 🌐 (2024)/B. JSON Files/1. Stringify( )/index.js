// JSON

const names = ['SpongeBob', "Patrick", "Squidward", "Sandy"];

const  person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing","Karate", "Soccer" ] 
 };

 const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
}, 
{
    "name": "Sandy",
    "age": 45,
    "isEmployed": false
}
]



const jsonString = JSON.stringify(names);
console.log(jsonString);

const jsonStringPerson = JSON.stringify(person)
console.log(jsonStringPerson);

const jsonStringPeople = JSON.stringify(people);
console.log(jsonStringPeople);


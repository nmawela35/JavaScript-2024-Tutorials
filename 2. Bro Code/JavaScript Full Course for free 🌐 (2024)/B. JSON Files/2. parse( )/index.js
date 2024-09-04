// JSON

const names = `["SpongeBob", "Patrick", "Squidward", "Sandy"]`;

const  person = `{
                    "name": "Spongebob",
                    "age": 30,
                    "isEmployed": true,
                    "hobbies": ["Jellyfishing","Karate", "Soccer" ] 
                }`;

const people = `[{ "name":"Spongebob", "age": 30, "isEmployed": true },
                    { "name": "Patrick", "age": 34, "isEmployed": false },
                        { "name": "Sandy", "age": 45, "isEmployed": false }]`;

const parsedNames = JSON.parse(names);
console.log(parsedNames);

const parsedPerson = JSON.parse(person)
console.log(parsedPerson)

const parsedPeople = JSON.parse(people)
console.log(parsedPeople);


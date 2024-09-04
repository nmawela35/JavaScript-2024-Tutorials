// fetch a JSON file

fetch("people.json")
    .then(response => response.json())
    // .then(data => console.log(data))
    .then (data => data.forEach(value => console.log(value.name, value.age)))
    .catch(error => console.log(error))

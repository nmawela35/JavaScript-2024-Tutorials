const axios = require("axios");
const data = axios.get("https://cat-fact.herokuapp.com/facts");
// console.log(data)
data
.then((res) =>{
    console.log(data)
})
.catch((error) =>{
    console.log(error)
})


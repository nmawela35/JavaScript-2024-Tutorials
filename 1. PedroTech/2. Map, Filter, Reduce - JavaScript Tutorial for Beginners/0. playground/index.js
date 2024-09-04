const users = [
    {id:1, name:"Pedro", age:26},
    {id:2, name:"john", age:22},
    {id:3, name:"Jessica", age:56},
    {id:4, name:"Rio Ferrera", age:126},
    {id:5, name:"michael scott", age:26},
]

//remove user by name
// const removeUser = (name) =>{
//     const newArray = users.filter((user) => {
//         return user.name != name;
//     })
//     return newArray;
// }
// console.log(removeUser("Pedro"))

//modify an array
const modifyUser = (id, newAge) =>{
    const modifiedArray = users.map((user) =>{
        if (user.id == id){
            return {id:user.id, name: user.name, age: newAge}
        }
        else{
            return user
        }
    }
)
return modifiedArray
}
console.log(modifyUser(1, 29))


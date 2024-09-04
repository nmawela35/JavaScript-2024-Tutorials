const array = [1, 5, 6, 4, 23, 4, 5, 2, 4];
//for loop
const newArray = [];

for (let i = 0; i <array.length; i++){
    newArray.push(`Number: ${array[i]}`)
}
console.log(newArray)

//reduce
const newArray2 = array.reduce((acc, current) =>{
return acc.concat(`Number: ${current}`)
},[])
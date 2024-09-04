const array = [1, 5, 6, 4, 23, 4, 5, 2, 4];
//for loop
const newArray = []
for (let i = 0; i < array.length; i++){
  if (array[i] > 4){
    newArray.push(array[i])

  }
}
console.log({newArray: newArray})

//filter method
const newArray2 = array.filter((item) => item != 4)
console.log({newArray2: newArray2})
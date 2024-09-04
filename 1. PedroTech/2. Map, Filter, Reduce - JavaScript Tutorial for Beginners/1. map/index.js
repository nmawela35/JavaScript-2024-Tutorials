const array = [1, 5, 6, 4, 23, 4, 5, 2, 4];
const newArray = [];
for (let i = 0; i < array.length; i++) {
  newArray.push(array[i]**2);       //get new array with number to the power of 2
}
console.log(newArray)

const newArray2 = array.map((item) => item**2);
console.log(newArray2)
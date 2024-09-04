
// const array = [1,2,3,4,5]

// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

let numbers = [1,2,3,4,5]

for (let i = 0; i <numbers.length; i++){
   numbers[i] = numbers[i]*2;
}
console.log(numbers)

const doubledNumbers =  numbers.map((number) =>number*2 )
console.log(doubledNumbers)

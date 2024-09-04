const array = [1, 2, 3, 4, 5];
//reduce
const newArray2 = array.reduce((sum, current) => {
  return sum + current;
}, 0);

console.log(newArray2);

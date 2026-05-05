const numbers = [1, -1, 2, 3];

// doing manually
let sum = 0;
for (let n of numbers) {
  sum = sum + n;
}

console.log(sum);

// doing with reduce
const result = numbers.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0); // 0 is the initial value of the accumulator

console.log(result)

// another
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = num.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result1)
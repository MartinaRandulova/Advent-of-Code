const { readFileSync } = require('fs');

const contents = readFileSync('./input.txt', 'utf-8');

let allSums = []

contents.split('\n').reduce((sum, calVal) => {
  if (calVal != '') {
    return sum + Number(calVal)
  }
  allSums.push(sum);
  return 0;
}, 0);

allSums.sort((a, b) => a < b ? 1 : -1);
console.log(allSums[0])                           //Task 1
console.log(allSums[0] + allSums[1] + allSums[2]) //Task 2


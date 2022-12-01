const { readFileSync } = require('fs');

const contents = readFileSync('./input.txt', 'utf-8');

let allSums = []
let sum = 0;

Array.from(contents.split('\n')).forEach((row) => {
  if (row != '') {
    sum += Number(row)
  } else {
    allSums.push(sum);
    sum = 0;
  }
});

allSums.sort((a,b) => a < b ? 1 : -1);
console.log(allSums[0]) //Task 1
console.log(allSums[0] + allSums[1] + allSums[2]) //Task 2
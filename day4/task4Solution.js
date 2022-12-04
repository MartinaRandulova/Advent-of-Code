const { readFileSync } = require('fs');

const contentsArr = readFileSync('./input.txt', 'utf-8').split('\n');

let fullyContainsCount = 0;
let onlyOverlaps = 0;

contentsArr.forEach(row => {
  let boardersNum = row.split(/,|-/).map(boarder => Number(boarder));
  console.log(boardersNum)
  // Task 1
  if ((boardersNum[0] <= boardersNum[2] && boardersNum[1] >= boardersNum[3]) || (boardersNum[0] >= boardersNum[2] && boardersNum[1] <= boardersNum[3])) { fullyContainsCount++; console.log('contains') }

  // Task 2
  if ((boardersNum[1] <= boardersNum[2] && boardersNum[0] >= boardersNum[3]) || (boardersNum[1] >= boardersNum[2] && boardersNum[0] <= boardersNum[3])) { onlyOverlaps++; console.log('overlaps') }

});
console.log(fullyContainsCount);
console.log(onlyOverlaps);


// Task 2

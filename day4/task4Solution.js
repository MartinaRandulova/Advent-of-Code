const { readFileSync } = require('fs');

const contentsArr = readFileSync('./input.txt', 'utf-8').split('\n');

let fullyContainsCount = 0;
let onlyOverlapsCount = 0;

contentsArr.forEach(row => {
  let boardersNum = row.split(/,|-/).map(boarder => Number(boarder));

  // Task 1
  if ((boardersNum[0] <= boardersNum[2] && boardersNum[1] >= boardersNum[3]) || (boardersNum[0] >= boardersNum[2] && boardersNum[1] <= boardersNum[3])) { fullyContainsCount++; }

  // Task 2
  if ((boardersNum[1] <= boardersNum[2] && boardersNum[0] >= boardersNum[3]) || (boardersNum[1] >= boardersNum[2] && boardersNum[0] <= boardersNum[3])) { onlyOverlapsCount++; }

});
console.log(fullyContainsCount);
console.log(onlyOverlapsCount);



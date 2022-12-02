const { readFileSync } = require('fs');

const contents = readFileSync('./input.txt', 'utf-8');

console.log(contents.split('\n').reduce((sum, round) => {
  if (round[0] === 'A' && round[2] == 'X') {
    return sum + 4
  } else if (round[0] === 'B' && round[2] == 'X') {
    return sum + 1
  } else if (round[0] === 'C' && round[2] == 'X') {
    return sum + 7
  } else if (round[0] === 'A' && round[2] == 'Y') {
    return sum + 8
  } else if (round[0] === 'B' && round[2] == 'Y') {
    return sum + 5
  } else if (round[0] === 'C' && round[2] == 'Y') {
    return sum + 2
  } else if (round[0] === 'A' && round[2] == 'Z') {
    return sum + 3
  } else if (round[0] === 'B' && round[2] == 'Z') {
    return sum + 9
  } else if (round[0] === 'C' && round[2] == 'Z') {
    return sum + 6
  } else {
    return sum
  }
}, 0))
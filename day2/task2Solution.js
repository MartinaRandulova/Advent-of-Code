const { readFileSync } = require('fs');

const contentsArr = readFileSync('./input.txt', 'utf-8').split('\n');

console.log(contentsArr.reduce((sum, round) => {
  let elf = round[0];
  let me = round[2]
  if (elf === 'A') {
    if (me === 'X') {
      return sum + 4
    } else if (me === 'Y') {
      return sum + 8
    } else {
      return sum + 3
    }
  } else if (elf === 'B') {
    if (me === 'X') {
      return sum + 1
    } else if (me === 'Y') {
      return sum + 5
    } else {
      return sum + 9
    }
  } else if (elf === 'C') {
    if (me === 'X') {
      return sum + 7
    } else if (me === 'Y') {
      return sum + 2
    } else {
      return sum + 6
    }
  } else {
    return sum
  }
}, 0))

console.log(contentsArr.reduce((sum, round) => {
  if (round[0] === 'A' && round[2] == 'X') {
    return sum + 3
  } else if (round[0] === 'B' && round[2] == 'X') {
    return sum + 1
  } else if (round[0] === 'C' && round[2] == 'X') {
    return sum + 2
  } else if (round[0] === 'A' && round[2] == 'Y') {
    return sum + 4
  } else if (round[0] === 'B' && round[2] == 'Y') {
    return sum + 5
  } else if (round[0] === 'C' && round[2] == 'Y') {
    return sum + 6
  } else if (round[0] === 'A' && round[2] == 'Z') {
    return sum + 8
  } else if (round[0] === 'B' && round[2] == 'Z') {
    return sum + 9
  } else if (round[0] === 'C' && round[2] == 'Z') {
    return sum + 7
  } else {
    return sum
  }
}, 0))
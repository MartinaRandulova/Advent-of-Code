const { readFileSync } = require('fs');

const contentsArr = readFileSync('./input.txt', 'utf-8').split('\n');

let alphabeticArr = Array.from('+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

let priorityFirstTask = 0;
let prioritySecondTask = 0;

contentsArr.forEach(element => {
  let len = element.length / 2;
  let firstCompArr = element.slice(0, len).split('');
  let secondCompArr = element.slice(len).split('');
  // find the common character
  let commonChar = firstCompArr.filter(char => secondCompArr.includes(char))[0];
  // evaluate the priority
  priorityFirstTask += alphabeticArr.findIndex(el => el === commonChar);
});

contentsArr.forEach((element, index) => {
  if (!(index % 3)) {
    // find the common character
    let firstComm = contentsArr[index].split('').filter(char => contentsArr[index + 1].includes(char));
    let commonChar = firstComm.filter(char => contentsArr[index + 2].includes(char))[0];
    // evaluate the priority
    prioritySecondTask += alphabeticArr.findIndex(el => el === commonChar);
  }
});

console.log(priorityFirstTask)
console.log(prioritySecondTask);
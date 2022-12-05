const { readFileSync } = require('fs');

const contentsArr = readFileSync('./input.txt', 'utf-8').split('\n');

//prepare an array with stacks
const stacksArr = Array.from(Array(9), () => []);

contentsArr.slice(0, 8).forEach(row => {
  let crateArr = row.split(' ');
  crateArr.forEach((crate, i) => { if (crate != 'nll') { stacksArr[i].push(crate) } })
});

const stacksArrB = JSON.parse(JSON.stringify(stacksArr)); // a way how to clone an array only with values, not a reference

const instructionArr = contentsArr.slice(10).map(el => el.split(' '));

//rearranging stacks based on the instructions in the first version of instructions
instructionArr.forEach(instruction => {
  for (let index = 0; index < instruction[1]; index++) {
    stacksArr[(instruction[5] - 1)].unshift(stacksArr[instruction[3] - 1].shift());
  }
})

//rearranging stacks based on the instructions in the second version of instructions
instructionArr.forEach(instruction => {
  stacksArrB[instruction[5] - 1].unshift(...stacksArrB[instruction[3] - 1].slice(0, instruction[1]));
  stacksArrB[instruction[3] - 1].splice(0, instruction[1]);
})

console.log('--------------final answer--------------')
let firstAnswer = [];
let secondAnswer = [];

for (let index = 0; index < stacksArr.length; index++) {
  firstAnswer.push(stacksArr[index][0]);
  secondAnswer.push(stacksArrB[index][0]);
}
console.log("First: " + firstAnswer)
console.log("Second: " + secondAnswer);
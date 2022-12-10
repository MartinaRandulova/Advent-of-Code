const { readFileSync } = require('fs');

const inputArr = readFileSync('./input.txt', 'utf-8').split('\n');

let xValue = 1;
let cycleNumber = 0;
let singnalStrength = 0;
let colNumber = 0;
let rowNumber = 0;
const cycleCheck = (cycleNumber) => {
  if (cycleNumber === 20 || cycleNumber === 60 || cycleNumber === 100 || cycleNumber === 140 || cycleNumber === 180 || cycleNumber === 220) {
    singnalStrength += cycleNumber * xValue
  }
}
const matrixCRT = Array.from(Array(6), () =>
  Array.from(Array(40), () => ""));

const updateCRT = () => {
  if (colNumber == 40) {
    colNumber = 0;
    rowNumber++
  }
  if (colNumber === xValue || colNumber === xValue - 1 || colNumber === xValue + 1) {
    matrixCRT[rowNumber][colNumber] = "#"
  } else {
    matrixCRT[rowNumber][colNumber] = "."
  }
  cycleNumber++;
  colNumber++
}

inputArr.forEach(instruction => {
  updateCRT()
  cycleCheck(cycleNumber);
  const [wording, value] = instruction.split(' ');
  switch (wording) {
    case 'noop':
      break;
    case 'addx':
      updateCRT();
      cycleCheck(cycleNumber);
      xValue += Number(value);
      break;
  }
})

console.log('signal strenght: ' + singnalStrength); //answer to the first task

matrixCRT.forEach(row => console.log(row.toString())); //answer to the second task
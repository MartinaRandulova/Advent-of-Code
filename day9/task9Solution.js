const { readFileSync } = require('fs');

const movingInstructionsArr = readFileSync('./input.txt', 'utf-8').split('\n');

const matrixDimension = 500;
const motionMatrixArr = Array.from(Array(matrixDimension), () => []).map(arr => Array.from(Array(matrixDimension), () => '.')); //preparing motion space matrix
const numberOfTails = 2;
const currentPositionsOfPoints = Array.from(Array(numberOfTails), () => [350, 200]); //starting positions of rope points (the first is the head)
const previousPositionsOfPoints = Array.from(Array(numberOfTails), () => [350, 200]);
const isTMoving = (tailNumber) => Math.abs(currentPositionsOfPoints[tailNumber - 1][1] - currentPositionsOfPoints[tailNumber][1]) > 1 || Math.abs(currentPositionsOfPoints[tailNumber - 1][0] - currentPositionsOfPoints[tailNumber][0]) > 1 ? true : false;

movingInstructionsArr.forEach(instruction => {
  const [direction, value] = instruction.split(' ');
  for (let step = 0; step < value; step++) {
    switch (direction) {
      case "R":
        currentPositionsOfPoints[0][1]++; //movingHead
        for (let tailNumber = 1; tailNumber < currentPositionsOfPoints.length; tailNumber++) {
          if (isTMoving(tailNumber)) {
            currentPositionsOfPoints[tailNumber][1] = currentPositionsOfPoints[tailNumber - 1][1] - 1;
            currentPositionsOfPoints[tailNumber][0] = currentPositionsOfPoints[tailNumber - 1][0];
          }
        }
        break;
      case "U":
        currentPositionsOfPoints[0][0]--; //movingHead
        for (let tailNumber = 1; tailNumber < currentPositionsOfPoints.length; tailNumber++) {
          if (isTMoving(tailNumber)) {
            currentPositionsOfPoints[tailNumber][0] = currentPositionsOfPoints[tailNumber - 1][0] + 1;
            currentPositionsOfPoints[tailNumber][1] = currentPositionsOfPoints[tailNumber - 1][1];
          }
        }
        break;
      case "L":
        currentPositionsOfPoints[0][1]--; //movingHead
        for (let tailNumber = 1; tailNumber < currentPositionsOfPoints.length; tailNumber++) {
          if (isTMoving(tailNumber)) {
            currentPositionsOfPoints[tailNumber][1] = currentPositionsOfPoints[tailNumber - 1][1] + 1;
            currentPositionsOfPoints[tailNumber][0] = currentPositionsOfPoints[tailNumber - 1][0];
          }
        }
        break;
      case "D":
        currentPositionsOfPoints[0][0]++; //movingHead
        for (let tailNumber = 1; tailNumber < currentPositionsOfPoints.length; tailNumber++) {
          if (isTMoving(tailNumber)) {
            currentPositionsOfPoints[tailNumber][0] = currentPositionsOfPoints[tailNumber - 1][0] - 1;
            currentPositionsOfPoints[tailNumber][1] = currentPositionsOfPoints[tailNumber - 1][1];
          }
        }
        break;
    }
    motionMatrixArr[currentPositionsOfPoints[numberOfTails - 1][0]][currentPositionsOfPoints[numberOfTails - 1][1]] = '#';
  }
});

let positions = 0;

motionMatrixArr.forEach(el => el.forEach(el => el.includes('#') ? positions++ : null));
console.log(positions) // answer to the first task
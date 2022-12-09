const { readFileSync } = require('fs');

const calculateVisitedPlaces = (numberOfKnots) => {
  const movingInstructionsArr = readFileSync('./input.txt', 'utf-8').split('\n');
  const matrixDimension = 600;
  const motionMatrixArr = Array.from(Array(matrixDimension), () => []).map(arr => Array.from(Array(matrixDimension), () => '.')); //preparing motion space matrix
  //const numberOfKnots = 10;
  const currentPositionsOfPoints = Array.from(Array(numberOfKnots), () => [500, 200]); //starting positions of rope points (the first is the head)
  const calculateDeltas = (tailNumber) => [currentPositionsOfPoints[tailNumber - 1][1] - currentPositionsOfPoints[tailNumber][1], currentPositionsOfPoints[tailNumber - 1][0] - currentPositionsOfPoints[tailNumber][0]];

  movingInstructionsArr.forEach(instruction => {
    const [direction, value] = instruction.split(' ');
    for (let step = 0; step < value; step++) {
      //first calculate the coordinates of head for different movements
      switch (direction) {
        case "R":
          currentPositionsOfPoints[0][1]++;
          break;
        case "U":
          currentPositionsOfPoints[0][0]--;
          break;
        case "D":
          currentPositionsOfPoints[0][0]++;
          break;
        case "L":
          currentPositionsOfPoints[0][1]--;
          break;
      }
      // now calculate the coordinates of tail parts
      for (let tailNumber = 1; tailNumber < currentPositionsOfPoints.length; tailNumber++) {
        const [deltaX, deltaY] = calculateDeltas(tailNumber);
        if (deltaX === 2) {
          currentPositionsOfPoints[tailNumber][1]++
          if (deltaY >= 1) {
            currentPositionsOfPoints[tailNumber][0]++
          } else if (deltaY <= -1) {
            currentPositionsOfPoints[tailNumber][0]--
          }
        } else if (deltaY === 2) {
          currentPositionsOfPoints[tailNumber][0]++
          if (deltaX >= 1) {
            currentPositionsOfPoints[tailNumber][1]++
          } else if (deltaX <= -1) {
            currentPositionsOfPoints[tailNumber][1]--
          }
        } else if (deltaX === -2) {
          currentPositionsOfPoints[tailNumber][1]--
          if (deltaY >= 1) {
            currentPositionsOfPoints[tailNumber][0]++
          } else if (deltaY <= -1) {
            currentPositionsOfPoints[tailNumber][0]--
          }
        } else if (deltaY === -2) {
          currentPositionsOfPoints[tailNumber][0]--
          if (deltaX >= 1) {
            currentPositionsOfPoints[tailNumber][1]++
          } else if (deltaX <= -1) {
            currentPositionsOfPoints[tailNumber][1]--
          }
        }
      }
      motionMatrixArr[currentPositionsOfPoints[numberOfKnots - 1][0]][currentPositionsOfPoints[numberOfKnots - 1][1]] = '#';
    }
  });

  let positions = 0;
  motionMatrixArr.forEach(el => el.forEach(el => el.includes('#') ? positions++ : null));
  return positions
}

console.log(calculateVisitedPlaces(2)) // answer to the first task
console.log(calculateVisitedPlaces(10)) // answer to the first task
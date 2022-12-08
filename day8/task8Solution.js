const { readFileSync } = require('fs');

const inputRow = readFileSync('./input.txt', 'utf-8').split('\n');

const forestMatrixSize = 99;
const inputRowArr = Array.from(Array(forestMatrixSize), () => []);
const inputColumnArr = Array.from(Array(forestMatrixSize), () => []);
inputRow.forEach((el, i) => {
  for (let index = 0; index < el.length; index++) {
    inputRowArr[i].push(el[index]);
    inputColumnArr[index].push(el[index]);
  }
})

let visibleTreesCount = (forestMatrixSize - 1) * 4; //all boarder trees

let highestScenicScore = 1;

for (let indX = 1; indX < inputRowArr.length - 1; indX++) {
  for (let indY = 1; indY < inputRowArr.length - 1; indY++) {
    const testedTreeHight = inputRowArr[indX][indY];
    const leftArray = inputRowArr[indX].slice(0, indY);
    const rightArray = inputRowArr[indX].slice(indY + 1);
    const topArray = inputColumnArr[indY].slice(0, indX);
    const downArray = inputColumnArr[indY].slice(indX + 1);

    let [scoreLeft, scoreRight, scoreTop, scoreDown] = [1, 1, 1, 1];
    for (let IndexScene = 0; IndexScene < rightArray.length - 1; IndexScene++) {
      if (rightArray[IndexScene] < testedTreeHight) {
        scoreLeft++
      } else {
        break;
      }
    }
    for (let IndexScene = leftArray.length - 1; IndexScene > 0; IndexScene--) {
      if (leftArray[IndexScene] < testedTreeHight) {
        scoreRight++
      } else {
        break;
      }
    }
    for (let IndexScene = topArray.length - 1; IndexScene > 0; IndexScene--) {
      if (topArray[IndexScene] < testedTreeHight) {
        scoreTop++
      } else {
        break;
      }
    }
    for (let IndexScene = 0; IndexScene < downArray.length - 1; IndexScene++) {
      if (downArray[IndexScene] < testedTreeHight) {
        scoreDown++
      } else {
        break;
      }
    }
    let currentScenicScore = scoreLeft * scoreRight * scoreTop * scoreDown;
    if (currentScenicScore > highestScenicScore) {
      highestScenicScore = currentScenicScore;
    }
    const topMax = Math.max(...topArray);
    const downMax = Math.max(...downArray);
    const leftMax = Math.max(...leftArray);
    const rightMax = Math.max(...rightArray);
    if (testedTreeHight > topMax || testedTreeHight > downMax || testedTreeHight > leftMax || testedTreeHight > rightMax) {
      visibleTreesCount++
    }
  }
}

console.log(visibleTreesCount); //answer to the 1st part
console.log(highestScenicScore); //answer to the 2nd part











// console.log(inputRowArr)
// let visibleTreesCount = 16;

// for (let indexR = 1; indexR < inputRowArr.length - 1; indexR++) {
//   for (let indexC = 1; indexC < inputRowArr[0].length - 1; indexC++) {
//     for (let compareInd = 0; compareInd < inputRowArr.length - 1; compareInd++) {
//       if (inputRowArr[indexR][indexC] > inputRowArr[indexR][compareInd]) {
//         console.log('isHigher?:' + inputRowArr[indexR][indexC]);
//         console.log('nextTree' + inputRowArr[compareInd][indexC])
//         console.log('nextTree' + inputRowArr[indexR][compareInd])
//         visibleTreesCount++
//         break;
//       } else {
//         for (let compareInd2 = 0; compareInd2 < inputRowArr.length - 1; compareInd2++) {
//           if (inputRowArr[indexR][indexC] > inputRowArr[compareInd][indexC]) {
//             visibleTreesCount++
//             break;
//           }
//         }
//       }
//     }
//   }
// }

// console.log(visibleTreesCount);
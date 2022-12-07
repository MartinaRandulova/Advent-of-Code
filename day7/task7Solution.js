const { readFileSync } = require('fs');

const contentsArr = readFileSync('./input.txt', 'utf-8').split('\n');
let dirSizes = { "/": 0 };
let dirPath = [];
let currentDirIndex = -1;

contentsArr.forEach(row => {

  if (row.match(/\$ cd/)) {
    let dirRequest = row.split(' ')[2];
    if (dirPath.includes(dirRequest)) {
      dirRequest += Math.floor(Math.random() * 10000); //there are different folders with same name, I need to distinguish them
    }
    if (dirRequest === '..') {
      dirPath.pop();
      currentDirIndex--
    } else {
      dirPath.push(dirRequest);
      currentDirIndex++
    }
  }
  if (row.match(/^\d/)) {
    const fileSize = row.split(' ')[0];
    dirPath.forEach((el) => {
      if (!dirSizes[el]) {
        dirSizes[el] = 0;
      }
      dirSizes[el] += Number(fileSize);
    })
  }
})

let sumSizesBellowHunThousand = 0;
for (const key in dirSizes) {
  if (dirSizes[key] <= 100000) {
    sumSizesBellowHunThousand += dirSizes[key];
  }
}
console.log(sumSizesBellowHunThousand); //answer to the task 1

let candidatesForDeletion = [];
let howMuchSpaceNeedsToBeDeleted = 30000000 - (70000000 - dirSizes["/"]);
for (const key in dirSizes) {
  if (dirSizes[key] > howMuchSpaceNeedsToBeDeleted) {
    candidatesForDeletion.push(dirSizes[key]);
  }
}
console.log(Math.min(...candidatesForDeletion)) //answer to the task 2

// Code your solution in this file!
const startingPoint = 42

// 43 -> 1
function distanceFromHqInBlocks(block) {
  if (block < startingPoint) {
    return startingPoint - block
  } else {
    return block - startingPoint
  }
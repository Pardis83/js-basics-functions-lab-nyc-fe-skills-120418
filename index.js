// Code your solution in this file!
const startingPoint = 42
const feetInBlock = 264

// 43 -> 1
// 34 -> 8
function distanceFromHqInBlocks(block) {
  if (block < startingPoint) {
    return startingPoint - block
  } else {
    return block - startingPoint
  }
}
function distantFromHqInFeet(block) {
  is 
  (block < startingPoint){
    return (startingPoint - block) * feetInBlock
  } else {
    return (block - startingPoint) * feetInBlock
  }
}
function distanceTravelledInFeet(startingBlock, endingBlock){
  if (endingBlock < startingBlock){
    return (startingBlock - endingBlock) * feetInBlock
  } else {
    return (startingBlock - endingBlock) * feetInBlock
  }
}

function calculatesFarePrice(startingBlock, endingBlock){
  const feetTraveled = distanceTravelledInFeet(startingBlock, endingBlock)
  if (feetTraveled <=400){
    return 0 
  } else if (400 < feetTraveled < 2000){
    return (feetTraveled - 4000) * 0.02
  }
}
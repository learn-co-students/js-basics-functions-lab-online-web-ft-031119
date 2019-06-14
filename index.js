// Code your solution in this file!
function distanceFromHqInBlocks(block){
  return Math.abs(block-42)
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInFeet(block1, block2){
  return Math.abs((block1-block2)*264)
}

function calculatesFarePrice(block1, block2){
  const feet=distanceTravelledInFeet(block1, block2)
  if (feet<400){return 0;}
  else if (feet<2000){return (feet-400)*.02}
  else if (feet<2500){return 25}
  else {return 'cannot travel that far'}
}
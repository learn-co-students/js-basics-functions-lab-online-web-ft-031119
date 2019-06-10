function distanceFromHqInBlocks(block){
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}
function distanceTravelledInFeet(starting, ending){
  return Math.abs(starting - ending) * 264
}
function calculatesFarePrice(starting,ending){
  let travelled =  distanceTravelledInFeet(starting,ending)
  let price
  if (travelled <= 400) {
    price = 0
  }
  else if (travelled <= 2000) {
    price = (travelled-400) * 0.02
  }
  else if (travelled <= 2500) {
    price = 25
  }
  else if (travelled > 2500) {
    price = 'cannot travel that far'
  }

  return price
}

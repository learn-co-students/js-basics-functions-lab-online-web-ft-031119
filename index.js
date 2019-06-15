// Code your solution in this file!
function distanceFromHqInBlocks(streetNo) {
  const hqStreetNo = 42;
  let blocks = 0;
  if (hqStreetNo < streetNo ) {
    blocks = streetNo - hqStreetNo;
  } else {
    blocks = hqStreetNo - streetNo;
  }
  return blocks;
}

function distanceFromHqInFeet(streetNo){
  const blockDistance = 264;
  let blocks = distanceFromHqInBlocks(streetNo);
  return blocks*blockDistance;
}

function distanceTravelledInFeet(startingStreet, endingStreet){
  let blocks = 0;
  const blockDistance = 264;
  if (startingStreet > endingStreet) {
    blocks = startingStreet - endingStreet;
  } else {
    blocks = endingStreet - startingStreet;
  }
  return blocks * blockDistance;
}

function calculatesFarePrice(startingStreet, endingStreet) {
  let distance = distanceTravelledInFeet(startingStreet, endingStreet);
  if (distance <= 400){
    return 0;
  } else if (distance > 400 && distance <= 2000){
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance <= 2500){
    return 25;
  } else {
    return "cannot travel that far"
  }

}

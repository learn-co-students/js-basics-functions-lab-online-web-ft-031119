function distanceFromHqInBlocks(start) {
  let distance = Math.abs( start - 42 );
  return distance;
}

function distanceFromHqInFeet(start) {
  let distance = distanceFromHqInBlocks(start) * 264;
  return distance;
}

function distanceTravelledInFeet(start, end) {
  let distance = Math.abs(start - end) * 264;
  return distance;
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  let fare = 0.0;
  if (distance <= 400) {
    fare = 0.0;
  } else if (distance > 400 && distance < 2000) {
    fare = ((distance * 2) - 800) / 100;
  } else if (distance >= 2000 && distance <= 2500) {
    fare = 25.00;
  } else {
    fare = 'cannot travel that far';
  }
  return fare;
}

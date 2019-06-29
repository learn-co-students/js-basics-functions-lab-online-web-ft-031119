
const hq = 42
const feetPerBlock = 264
const smallFare = .02
const largeFare = 25.00
const promoDistance = 400

function distanceFromHqInBlocks(destination) {
  return Math.abs(destination - hq)
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * feetPerBlock
}

function distanceTravelledInFeet(pointA, pointB) {
  return Math.abs(pointB - pointA) * feetPerBlock
}

function calculatesFarePrice(start, destination) {
  let rideDistance = distanceTravelledInFeet(start, destination)
  if (rideDistance < promoDistance) {
    return 0
  } else if (rideDistance < 2000) {
    return (rideDistance - promoDistance) * smallFare
  } else if (rideDistance < 2500) {
    return largeFare
  } else {
    return "cannot travel that far"
  }


}

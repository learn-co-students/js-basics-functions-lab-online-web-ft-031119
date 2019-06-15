// Code your solution in this file!
function distanceFromHqInBlocks(location){
  let distance;

  if (location > 42){
    return (location - 42);
  }
  else if (location < 42);
   return (42 - location );
}

function distanceFromHqInFeet(someValue) {
  let distance= distanceFromHqInBlocks(someValue);

  return (264 * distance);

}

function distanceTravelledInFeet(start, end){

   if ( end > start){
     return ((end - start) * 264);
   }
   else if (end < start){
     return ((start - end) * 264);
   }
}

  function calculatesFarePrice(start,end){
    let distance= distanceTravelledInFeet(start, end);

    switch (true) {
    case distance <= 400:
      return 0
    case distance > 400 && distance <= 2000:
      return 0.02 * (distance - 400)
    case distance > 2000 && distance < 2500:
      return 25
    default: return 'cannot travel that far'
  }

  }

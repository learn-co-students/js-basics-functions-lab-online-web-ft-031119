// Code your solution in this file!
function distanceFromHqInBlocks(somevalue) {
	if (somevalue <= 42) {
		return (42 - somevalue);
	} else {
		return (somevalue - 42);
	}
}

function distanceFromHqInFeet(somevalue) {
	return distanceFromHqInBlocks(somevalue) * 264;
}

function distanceTravelledInFeet(firstvalue , secondvalue) {
	if (firstvalue < secondvalue ) {
		return (secondvalue - firstvalue) * 264;
	} else {
		return (firstvalue - secondvalue) * 264;
	}
}


function calculatesFarePrice(start, destination){
	if (distanceTravelledInFeet(start , destination) <= 2000) {
		if (distanceTravelledInFeet(start , destination) <= 400) {
			return 0;
		} else {
			return (((distanceTravelledInFeet(start , destination) - 400) * 2) / 100)
		}
	} else {
		if (distanceTravelledInFeet(start , destination) < 2500) {
			return (25)
		} else {
			return "cannot travel that far"
		}
	}

}
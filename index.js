// Code your solution in this file!
function distanceFromHqInBlocks(hqLocation) {
    return Math.abs(42 - hqLocation);
}

function distanceFromHqInFeet(hqLocation) {
    let distance = distanceFromHqInBlocks(hqLocation);
    
    return Math.abs(distance * 264);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
    return Math.abs((startingBlock - endingBlock) * 264);
}

function calculatesFarePrice(startingBlock, endingBlock) {
    let distance = Math.abs(startingBlock - endingBlock) * 264;

    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400)* 0.02;
    } 
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }

    return 'cannot travel that far';
}
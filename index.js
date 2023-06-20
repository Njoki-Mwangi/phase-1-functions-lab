// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - 42);
    //Math.abs to return an absolute value of a number
}
function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks( pickupLocation)
    return blocks * 264;
}
function distanceTravelledInFeet(startBlock, endBlock){
    const distance = distanceTravelledInFeet(startBlock, endBlock)
    return blocks * 264
}
function calculateFarePrice(startBlock, endBlock){
    const distance = distanceTravelledInFeet(startBlock, endBlock)
    
    if (distance <= 400) {
        return 0;
    }else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance <= 2500){
        return 25
    } else{
        return 'cannot travel that far'
    }

}
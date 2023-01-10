// Code your solution in this file!

// Test #1
function distanceFromHqInBlocks(streetNumber) {
    const HQ = 42;
    return Math.abs(HQ - streetNumber); 
}

// Test #2
function distanceFromHqInFeet(streetNumber) {
    const blocks = distanceFromHqInBlocks(streetNumber);
    return blocks * 264;
}

// Test #3
function distanceTravelledInFeet(start, end) {
    const dist = Math.abs(start - end);
    return dist * 264;
}

// Test #4
function calculatesFarePrice(start, destination) {
    let fare;
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        fare = 0;
    } else if (feet <= 2000) {
        fare = (feet - 400) * 0.02;
    } else if (feet <= 2500) {
        fare = 25;
    } else {
        return "cannot travel that far";
    }
    return fare;
}
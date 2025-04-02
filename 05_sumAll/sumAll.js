const sumAll = function(startInt, endInt) {
    let sum = 0;
    
    if (startInt < 0 || endInt < 0 || !(startInt % 1 === 0) ||
     !(endInt % 1 === 0) || (typeof startInt !== "number") ||
      (typeof endInt !== "number")) {
        return "ERROR";
    } else if (startInt < endInt) {
        for (let i = startInt; i <= endInt; i++) {
            sum = sum + i;
        }
        return sum;
    } else if (startInt > endInt) {
        for (let i = endInt; i <= startInt; i++) {
            sum = sum + i;
        }
        return sum;
    } else {

    }

};

// Do not edit below this line
module.exports = sumAll;

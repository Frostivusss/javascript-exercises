const removeFromArray = function(myArray, valueToDelete) {
    const args = Array.from(arguments);
    for (let j = 1; j < args.length; j++) {
        for (let i = 0; i < args[0].length; i++) {
            if (args[0][i] === args[j]) {
                myArray.splice(i,1);
                i--;
            }
        }
    }

    return myArray;
    };

// Do not edit below this line
module.exports = removeFromArray;

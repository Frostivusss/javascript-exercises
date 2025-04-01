

const repeatString = function(stringWord, numberOfTimes) {

    if(numberOfTimes < 0){

        return finalRepeatedString = "ERROR";

    }  else {

        let finalRepeatedString = '';

        for(let i = 0; i < numberOfTimes; i++){
            finalRepeatedString += stringWord;
        }

    return finalRepeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;

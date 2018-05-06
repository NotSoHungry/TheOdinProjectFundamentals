var repeatString = function(string, multiplyVal) {
    var resultString = "";

    if (multiplyVal >= 0) {
        for (let i = 1; i <= multiplyVal; i++) {
            resultString += string;
        }
    } else {return 'ERROR'}

    return resultString;
}

module.exports = repeatString

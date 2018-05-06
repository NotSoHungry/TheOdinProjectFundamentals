var sumAll = function(num1, num2) {
    if ( (num1.constructor == Number && num1 >= 0) && ((num2.constructor == Number && num2 >= 0)) ) {
        let biggerVal = (num1 > num2) ? num1 : num2,
            smallerVal = (num1 < num2) ? num1 : num2,
            numArray = [],
            sumOfArrayValues = null;
 
         for (i = smallerVal; i <= biggerVal; i++) {
             numArray.push(i);
         }
 
         return sumOfArrayValues = numArray.reduce((a, b) => {
             return a + b;
         })
     } else {
         return "ERROR";
     }
    }

module.exports = sumAll

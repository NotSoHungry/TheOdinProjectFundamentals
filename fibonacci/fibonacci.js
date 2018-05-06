var fibonacci = function(count) {
    if (count > 0) {
        let previousNumber = 0,
            currentNumber = 1,
            sum,
            fibonacciArray = [0];

        while (fibonacciArray.length < count) {
            sum = previousNumber + currentNumber;
            fibonacciArray.push(sum);

            previousNumber = currentNumber;
            currentNumber = sum;
        }

        return fibonacciArray[fibonacciArray.length - 1];
    } else {return "OOPS";}
}

module.exports = fibonacci

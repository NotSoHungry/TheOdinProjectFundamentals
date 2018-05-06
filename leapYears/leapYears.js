var leapYears = function(year) {
 let isCenturyYear = year % 100 === 0;

 if (isCenturyYear) {
     return (year % 4 === 0 && year % 400 === 0) ? true : false;
 } else {
     return (year % 4 === 0) ? true : false;
 }
}

module.exports = leapYears

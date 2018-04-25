var ftoc = function(input) {
  let convertedValue = (input - 32) / 1.8;

  if (Number.isInteger(convertedValue)) {
    return convertedValue;
  } else {
    return Number(convertedValue.toFixed(1));
  }
}

var ctof = function(input) {
  let convertedValue = (input * 1.8) + 32;

  if (Number.isInteger(convertedValue)) {
    return convertedValue;
  } else {
    return Number(convertedValue.toFixed(1));
  }
}

module.exports = {
  ftoc,
  ctof
}

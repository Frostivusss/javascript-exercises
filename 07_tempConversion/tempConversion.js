const convertToCelsius = function(num) {
  let fahrenheitToCelcius = (num - 32) * 5 / 9;
  fahrenheitToCelcius = Math.round(fahrenheitToCelcius * 10) / 10
  return fahrenheitToCelcius;
};

const convertToFahrenheit = function(num) {
  let celciusToFahrenheit = (num * 9/5 + 32)
  celciusToFahrenheit = Math.round(celciusToFahrenheit * 10) / 10
  return celciusToFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

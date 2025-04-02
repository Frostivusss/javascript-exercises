const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
  return num1-num2;
	
};

const sum = function(num) {
  let sum = 0;
  for ( let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return +sum;
};

const multiply = function(num) {
  let product = num[0];
  for (let i = 1; i < num.length; i++) {
      product *= num[i] ;
  }
  return product;
};

const power = function(num1, num2) {
  let power = num1;
  for ( let i = 1; i < num2; i++) {
    power *= num1;
  }
  return power;
};

const factorial = function(num) {
  let factorial = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = num; i > 1; i--) {
      factorial*= i-1;
    }
  }
	return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

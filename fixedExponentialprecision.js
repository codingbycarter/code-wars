//  Methods of Number object--toFixed(), toExponential() and toPrecision()
const howManySmaller = (arr, n) =>
  arr.filter(val => val.toFixed(2) < n).length;

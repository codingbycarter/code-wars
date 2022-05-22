// find the divisors!
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

  function divisors(integer) {
  let arr = [];
  for (let i = 2; i <integer; i++) {
    integer % i == 0 ? arr.push(i) : null;
  }
  return arr.length == 0? integer + ' is prime' : arr;
};

// Methods of String object--slice(), substring() and substr()

function cutIt(array) {
  var shortest = array.reduce((min,s) => Math.min(min, s.length), Infinity);
  return array.map(s => s.slice(0, shortest));
}

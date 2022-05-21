//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
function spinWords(string){
  return string.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}

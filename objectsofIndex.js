// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search() 
//coding here..
  function firstToLast(str,c){
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

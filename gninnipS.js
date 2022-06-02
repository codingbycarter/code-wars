// function spinWords(string){
  //TODO Have fun :
  //split
  // for (let i=0)
  //if string[i]. slice(-1)
 function spinWords(string){
 let stringArr = string.split(' ')
  for(i=0; i<stringArr.length; i++){
    if(stringArr[i].length >= 5){
    stringArr[i] = stringArr[i].split('').reverse().join('')
}
}
 return stringArr.join(' ')
}

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
function alienLanguage(str){
  var words = str.toUpperCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    var precedingLetters = words[i].slice(0, -1);
    var lastLetters = words[i].slice(-1).toLowerCase();  
    words[i] = precedingLetters + lastLetters;
  }
  return words.join(" ");
}

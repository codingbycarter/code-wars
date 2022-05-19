//  Methods of String object--concat() split() and its good friend join()
function splitAndMerge(str,sp){
 let words = str;
 return words.split(" ").map(index => index.split("").join(sp)).join(" ");
}

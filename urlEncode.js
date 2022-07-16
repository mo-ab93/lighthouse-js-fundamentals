const urlEncode = function(text) {
let space = "";
if(text[0] !== " "){
  for(i = 0; i < text.length; i++){
    if(text[i] === " "){
      space += "%20";
    }else{
      space += text[i];
    }
  }
  return space;
}
  for(i = 1; i < text.length - 1; i++){
    if(text[i] === " "){
      space += "%20";
    }else{
      space += text[i];
    }
  }
  return space;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


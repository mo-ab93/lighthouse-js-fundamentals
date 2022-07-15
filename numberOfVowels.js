const numberOfVowels = function(data) {
  // Put your solution here
  let vowels =["a", "e", "i", "o", "u"];
  let counter = 0 ;
  for( let i = 0; i < data.length; i++){
    if(vowels.includes(data[i])){
      counter++;
    }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
const camelCase = function(input) {
let result = '';
input = input.trim()
let arr = input.split(' ');
for(let i = 0; i < arr.length; i++){
  if(i !== 0){
    result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }else{
    result += arr[i].toLowerCase();
  }
}
return result;
};



console.log(camelCase("this is a string"));
console.log(camelCase(" loopy lighthouse "));
console.log(camelCase("supercalifragalisticexpialidocious"));




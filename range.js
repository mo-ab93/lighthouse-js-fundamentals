const range = function(start, end, step){
  let arr = [];
 if(start === undefined || end === undefined || step === undefined || start > end || step <= 0){
  arr = [];
 }else{
  for(let counter = start; counter <= end; counter += step){
    arr.push(counter);
  }
 }
 return arr;
}

console.log(range(0,10,2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
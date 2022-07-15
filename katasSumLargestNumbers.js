const sumLargestNumbers = function(data) {
  // Put your solution here
 let num1 = data[0];
 for(let i = 0; i < data.length; i++){
  if(data[i] > num1){
    num1 = data[i];
  }
 }
 data.splice(data.indexOf(num1));

 let num2 = data[0];
 for(let j = 0; j < data.length; j++){
  if(data[j] > num2){
    num2 = data[j];
  }
 }

 return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([-10, -4, -34, -6, -92, -2]));

let hami = [1, 3, 4, 5];
let firstElement = hami[2];
console.log(firstElement);

console.log(hami.splice(hami.indexOf(firstElement)))
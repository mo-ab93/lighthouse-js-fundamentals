const repeatNumbers = function(data) {
  // Put your solution here
  let finalResult = [];
  let result = '';
  for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i][1]; j++){
      result += data[i][0];
    }
    finalResult.push(result)
    result = '';
  }
  return finalResult.join(', ')
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
const smartGarbage = function(trash, bins){
  const keys = Object.keys(bins);
 for(let key of keys){
  if(key === trash){
    bins[key] +=1;
  }
 }
 return bins;
}
console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("waste", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("compost", { waste: 4, recycling: 2, compost: 5 }));



const hellos = [1, 2, 5, 7];

for(let hello of hellos){
  console.log(hello);
}

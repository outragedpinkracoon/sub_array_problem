var maxSequence= function(array){
  var allPermutations = permutations(array);
  var highest = highestSum(allPermutations);
  if(highest < 0) highest = 0;
  return highest;
}

var highestSum = function(permutations){
  var highest = 0;
  for(item of permutations){
    var total = sum(item);
    if(!highest || total > highest) highest = total;
  }
  return highest;
}

var sum = function(array){
  return array.reduce((pre, cur) => pre + cur);
}

var permutations = function(array){
  var result = [];

  var run = function(array){
    if(array.length === 0) return;
    subItems(array, result);
    var next = array.slice();
    next.shift();
    run(next);
  };

  run(array);
  return result;
}

var subItems = function(array, result){
  var take = 1;
  while(take <= array.length){
    var copy = array.slice();
    var subItems = copy.splice(0, take);
    result.push(subItems);
    take++;
  }
}

var result = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);

var model = {
  maxSequence: function(array){
    var permutations = this.permutations(array);
    var highest = this.highestSum(permutations);
    if(highest < 0) highest = 0;
    return highest;
  },
  highestSum: function(permutations){
    var highest = 0;
    for(item of permutations){
      var total = this.sum(item);
      if(!highest || total > highest) highest = total;
    }
    return highest;
  },
  sum: function(array){
    return array.reduce((pre, cur) => pre + cur);
  },
  permutations: function(array){
    var result = [];

    var run = function(array){
      if(array.length === 0) return;
      this.subItems(array, result);
      var next = array.slice();
      next.shift();
      run(next);
    }.bind(this);

    run(array);
    return result;
  },
  subItems: function(array, result){
    var take = 1;
    while(take <= array.length){
      var copy = array.slice();
      var subItems = copy.splice(0, take);
      result.push(subItems);
      take++;
    }
  }
}

module.exports = model;
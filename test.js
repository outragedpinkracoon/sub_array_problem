var assert = require('assert');
var f = require('./app.js');

describe( "permutations", function(){
  it("should work on 1 item",function(){
     assert.deepEqual(f.permutations([1]), [[1]]);
  });

  it("should work on 2 items",function(){
    var result = f.permutations([1,2]);
     assert.deepEqual(result,[[1], [1,2], [2]]);
  });

  it("should work on negative items",function(){
    var result = f.permutations([-1,-2]);
     assert.deepEqual(result,[[-1], [-1,-2], [-2]]);
  });


  it("should work on 3 items",function(){
     assert.deepEqual(f.permutations([1,2,3]),[[1], [1,2], [1,2,3], [2], [2,3], [3]]);
  });

  it("should work on empty list",function(){
     assert.deepEqual(f.permutations([]),[]);
  });
});

describe( "highest sum", function(){
  it("should work on 3 items",function(){
     assert.equal(f.highestSum([[1],[1,2],[1,2,3]]),6);
  });

  it("should work on negative items",function(){
     assert.equal(f.highestSum([[-1],[-1,-2],[-1,-2,-3]]),-1);
  });

  it("should work on 1 item",function(){
     assert.equal(f.highestSum([[1]]),1);
  });

  it("should work on empty array",function(){
     assert.equal(f.highestSum([]),0);
  });
});

describe( "maxSequence", function(){
  it("should work on an empty array",function(){
    assert.equal(f.maxSequence([]), 0);
  });
  
  it("Returns zero for all negatives",function(){
    assert.equal(f.maxSequence([-1,-2,-3]), 0);
  });
  
  it("Returns sum for all positives",function(){
    assert.equal(f.maxSequence([1,2,3]), 6);
  });
  
  it("Returns on simple example",function(){
    assert.equal(f.maxSequence([1,-2,3]), 3);
  });

  it("should work on the example",function(){
    assert.equal(f.maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });

  it("should work on the example 2",function(){
    assert.equal(f.maxSequence([-2, 1, -3, 5, -1]), 5);
  });
});
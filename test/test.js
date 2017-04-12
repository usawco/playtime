var assert = require("assert"); // node.js core module

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
    })
  })
});

describe('Math', function(){
  describe('divide by zero', function(){
    it('1/0 should return "Infinity" ', function(){
      assert.equal('Infinity', 1/0); 
    })
  })
});
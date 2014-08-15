var assert = require("assert"); // core module
var C = require('../index.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })
  });
  
  describe('correct behaviour', function () {
    it('It should return an array', function () {
      assert.equal(C.getChange(10, 10).constructor, Array);
    });
    it('I pay exactly the correct price, I should receive empty array', function () {
      assert.equal(C.getChange(10, 10).length, 0);
    });
    it('I need one coin change', function () {
      var changeResult = C.getChange(11, 10);
      assert.equal(changeResult.length, 1);
      assert.equal(changeResult[0], 100);
    });
    it('I need more coins change', function () {
      assert.deepEqual(C.getChange(11.02, 10), [100, 2]);
      var changeResult = C.getChange(11.02, 10);
      assert.equal(changeResult.length, 2);
      assert.equal(changeResult[0], 100);
      assert.equal(changeResult[1], 2);
    });
    
    it('getChange(100, 14.87) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function(){
      assert.deepEqual(C.getChange(100, 14.87), [5000, 2000, 1000, 500, 10, 2, 1 ]);
    })
  });
})
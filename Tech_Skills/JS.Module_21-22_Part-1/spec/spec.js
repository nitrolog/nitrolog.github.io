var math = require('../js/script.js');
var mathPowResult;
var mathAbsResult;
var sum;

describe("math", function() {
  it("mathPow()", function() {

  	mathPowResult = math.mathPow(-2, 3);
  	
  	console.log(mathPowResult);

    expect(mathPowResult).toEqual(-8);
  });

  it("mathAbs()", function () {

  	mathAbsResult = math.mathAbs(mathPowResult);
  	
  	console.log(mathAbsResult);
  	
    expect(mathAbsResult).toEqual(8);
  });

  it("sumFormula()", function () {

  	sum = math.sumFormula(-2, 3);

  	console.log(sum);

  	expect(sum).toEqual('c = -2+3');
  })
});
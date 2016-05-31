// var a = prompt('Введите любое целое число', '');
// var b = prompt('Введите степень числа', '');
var a, b;
var mathPowResult;
var mathAbsResult;
var sum;

var math = {
	mathPow: function (a, b) {
		return Math.pow(a, b);
	},
	mathAbs: function (mathPowResult) {
		return Math.abs(mathPowResult);
	},
	sumFormula: function (a, b) {
		return 'c = ' + a + '+' + b;
	}
}

mathPowResult = math.mathPow(a, b);
mathAbsResult = math.mathAbs(mathPowResult);
sum = math.sumFormula(a, b);

console.log(mathPowResult);
console.log(mathAbsResult);
console.log(sum);

module.exports = math;
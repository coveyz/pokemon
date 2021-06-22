const question = `递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。`

var multiply = function (A, B) {
	if (B === 0) return B;
	return A + multiply(A, B - 1);
};

console.log(multiply(3, 4));
console.log(multiply(1, 10));

const question = `
写一个函数，求两个整数之和，要求在函数体内不得使用 “+”、“-”、“*”、“/” 四则运算符号。
`;

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
	while (b !== 0) {
		const carry = (a & b) << 1;
		a = a ^ b;
		b = carry;
	}

	return a;
};

console.log(add(1, 1));

const question = `
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
`;

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	if (n === 0) return 1;
	if (n === 1) return x;

	// n 不能是负数
	let absn = Math.abs(n);
	// 结果不能是 0
	let result = 1;

	while (absn) {
		// 判断 奇偶
		// absn n值 根据最右是否为1来判断
		// 3的二进位 11
		// 1的二进位 01
		if (absn & 1) {
			result = result * x;
		}
		x = x * x;

		absn = absn >> 1;
	}

	const isNegative = n < 0;

	return isNegative ? 1 / result : result;
};

console.log(myPow(2.0, 10));

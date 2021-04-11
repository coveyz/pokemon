const question = `
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。
`;
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
	if (n < 0) {
		return false;
	}

	const factors = [2, 3, 5];

	for (const factor of factors) {
		while (n % factor === 0) {
			n /= factor;
		}
	}
	return n === 1;
};

console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(14));
console.log(isUgly(1));

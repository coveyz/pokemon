const question = `给你一个整数 n ，请你找出并返回第 n 个 丑数 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。
`;
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
	const dp = new Array(n + 1).fill(0);
	dp[1] = 1;
	let p2 = 1,
		p3 = 1,
		p5 = 1;

	for (let index = 2; index <= n; index++) {
		const num2 = dp[p2] * 2,
			num3 = dp[p3] * 3,
			num5 = dp[p5] * 5;
		dp[index] = Math.min(Math.min(num2, num3), num5);
		if (dp[index] === num2) {
			p2++;
		}
		if (dp[index] === num3) {
			p3++;
		}
		if (dp[index] === num5) {
			p5++;
		}
	}

	return dp[n];
};

console.log(nthUglyNumber(10));
// console.log(nthUglyNumber(1));
// console.log(nthUglyNumber(449));

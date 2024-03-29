const question = `
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
`;

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
	const dp = [1, 1];
	for (let index = 2; index <= n; index++) {
		dp[index] = (dp[index - 1] + dp[index - 2]) % 1000000007;
	}

	return dp[n];
};

const n = 44;

console.log(numWays(n));

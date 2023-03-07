const question = `
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
你可以认为每种硬币的数量是无限的。
`


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let max = amount + 1;
	const dp = new Array(max).fill(max);
	dp[0] = 0;

	for (let index = 1; index <= amount; index++) {
		for (let key = 0; key < coins.length; key++) {
			if (coins[key] <= index) {
				dp[index] = Math.min(dp[index], dp[index - coins[key]] + 1);
			}
		}
	}
	return dp[amount] > amount ? -1 : dp[amount];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	if (amount < 1) return 0;

	const magic = (coins, rem, count) => {
		if (rem < 0) return -1;
		if (rem === 0) return 0;
		console.log('count=>', count, 'rem=>', rem);
		if (count[rem - 1] !== 0) return count[rem - 1];
		let min = Infinity;
		for (const conin of coins) {
			const res = magic(coins, rem - conin, count);
			console.log('res=>', res);
			if (res >= 0 && res < min) {
				min = 1 + res;
			}
		}
		count[rem - 1] = min === Infinity ? -1 : min;
		return count[rem - 1];
	};

	return magic(coins, amount, new Array(amount).fill(0));
};

let coins = [1, 2, 5],
	amount = 11;

console.log(coinChange(coins, amount));

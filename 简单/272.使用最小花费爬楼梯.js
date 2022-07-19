const question = `
给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
请你计算并返回达到楼梯顶部的最低花费。
`;

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	const n = cost.length,
		dp = new Array(n + 1);
	dp[0] = dp[1] = 0;

	for (let index = 2; index <= n; index++) {
		dp[index] = Math.min(dp[index - 1] + cost[index - 1], dp[index - 2] + cost[index - 2]);
	}

	return dp[n];
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));

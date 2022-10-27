const question = `
给你一个整数数组 nums ，其中 nums[i] 表示第 i 个袋子里球的数目。同时给你一个整数 maxOperations 。

你可以进行如下操作至多 maxOperations 次：
选择任意一个袋子，并将袋子里的球分到 2 个新的袋子中，每个袋子里都有 正整数 个球。
比方说，一个袋子里有 5 个球，你可以把它们分到两个新袋子里，分别有 1 个和 4 个球，或者分别有 2 个和 3 个球。
你的开销是单个袋子里球数目的 最大值 ，你想要 最小化 开销。

请你返回进行上述操作后的最小开销。
`

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
	nums.sort((a, b) => b - a);

	const helper = (max) => {
		let tmp = 0;
		for (let index = 0; index < nums.length; index++) {
			const element = nums[index];
			if (tmp > maxOperations) {
				return false;
			}
			if (element > max) {
				tmp += Math.floor((element - 1) / max);
			}
		}

		return tmp <= maxOperations;
	};

	let left = 1,
		right = nums[0];

	while (left < right) {
		let middle = (left + right) >> 1;
		if (helper(middle)) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}

	return left;
};

const nums = [9],maxOperations = 2;
// const nums = [2, 4, 8, 2],maxOperations = 4;

console.log(minimumSize(nums, maxOperations));

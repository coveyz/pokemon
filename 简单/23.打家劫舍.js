const question = `
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
	const len = nums.length;
	if (len === 1) {
		return nums[0];
	} else if (len === 2) {
		return Math.max(...nums);
	} else {
		let first = nums[0],
			second = Math.max(nums[0], nums[1]);

		for (let index = 2; index < len; index++) {
			const money = nums[index];
			const tmp = second;
			second = Math.max(first + money, second);
			first = tmp;
		}

		return second;
	}
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

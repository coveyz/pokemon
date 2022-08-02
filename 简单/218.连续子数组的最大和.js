const question = `
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
要求时间复杂度为O(n)。
`;
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	if (nums.length === 0) return nums[0];

	let cur = nums[0];
	let max = nums[0];

	for (let index = 1; index < nums.length; index++) {
		const element = nums[index];
		cur = cur > 0 ? cur + element : element;
		max = Math.max(max, cur);
	}

	return max;
};

console.log(maxSubArray([22, 1, -3, 4, -1, 2, 1, -5, 4]));

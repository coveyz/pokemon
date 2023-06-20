const question = `
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let pre = 0,
		result = nums[0];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		pre = Math.max(pre + element, element);
		result = Math.max(pre, result);
	}

	return result;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let nums = [1];
// let nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));

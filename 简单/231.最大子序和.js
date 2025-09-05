const question = `
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let pre = 0;
	let result = nums[0];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		pre = Math.max(pre + element, element);
		result = Math.max(result, pre);
	}

	return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

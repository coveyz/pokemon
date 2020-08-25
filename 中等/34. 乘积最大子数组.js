const question = `给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => {
	let res = nums[0];
	let prevMin = nums[0];
	let prevMax = nums[0];
	let temp1 = 0,
		temp2 = 0;
	for (let i = 1; i < nums.length; i++) {
		temp1 = prevMin * nums[i];
		temp2 = prevMax * nums[i];
		prevMin = Math.min(temp1, temp2, nums[i]);
		prevMax = Math.max(temp1, temp2, nums[i]);
		res = Math.max(prevMax, res);
	}
	return res;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2]));
console.log(maxProduct([-2, 3, -4]));

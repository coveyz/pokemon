const question = `
给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
	nums.sort((a, b) => a - b);
	const len = nums.length;
	let res = 0;

	for (let index = len - 1; index >= 2; index--) {
		let left = 0,
			right = index - 1;

		while (left < right) {
			if (nums[left] + nums[right] > nums[index]) {
				res += right - left;
				right -= 1;
			} else {
				left += 1;
			}
		}
	}

	return res;
};

let nums = [2, 2, 3, 4];

console.log(triangleNumber(nums));

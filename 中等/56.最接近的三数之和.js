const question = `
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案
`;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
	const newNums = nums.sort((a, b) => a - b);

	let result = nums[0] + nums[1] + nums[nums.length - 1];

	for (let index = 0; index < newNums.length; index++) {
		const first = newNums[index];

		let low = index + 1;
		let height = newNums.length - 1;

		while (low < height) {
			let second = newNums[low];
			let third = newNums[height];
			let sum = first + second + third;

			if (sum > target) {
				height -= 1;
			} else {
				low += 1;
			}

			if (Math.abs(sum - target) < Math.abs(result - target)) {
				result = sum;
			}
		}
	}

	return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));

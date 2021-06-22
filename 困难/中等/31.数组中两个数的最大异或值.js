const question = `给定一个非空数组，数组中元素为 a0, a1, a2, … , an-1，其中 0 ≤ ai < 231 。
找到 ai 和aj 最大的异或 (XOR) 运算结果，其中0 ≤ i,  j < n 。
你能在O(n)的时间解决这个问题吗？`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
	var maxNumber = 0;

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		for (let number = index + 1; number < nums.length; number++) {
			const item = nums[number];
			const result = element ^ item;
			if (result > maxNumber) {
				maxNumber = result;
			}
		}
	}

	return maxNumber;
};

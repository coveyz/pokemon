const question = `
给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 
`;

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let left = 0;
	let right = 0;
	let prod = 0;

	let min = nums.length + 2;
	while (right < nums.length) {
		prod += nums[right];

		if (prod >= target) {
			min = Math.min(min, right - left + 1);
			left += 1;
			right = left;
			prod = 0;
		} else {
			right += 1;
		}
	}

	return min === nums.length + 2 ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));

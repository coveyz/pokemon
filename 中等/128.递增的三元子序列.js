const question = `
给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。
`;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
	const len = nums.length;
	if (len < 3) return false;

	let first = nums[0],
		second = Infinity;

	for (let index = 0; index < len; index++) {
		const element = nums[index];
		if (element > second) {
			return true;
		} else if (element > first) {
			second = element;
		} else if (element < first) {
			first = element;
		}
	}

	return false;
};

// let nums = [5, 4, 3, 2, 1];
// let nums = [1, 2, 3, 4, 5];
let nums = [20, 100, 10, 12, 5, 13];
console.log(increasingTriplet(nums));

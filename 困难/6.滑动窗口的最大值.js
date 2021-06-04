const question = `
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
`;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	if (nums.length === 0) return [];
	let left = 0,
		right = k,
		len = nums.length,
		arr = [],
		minNumber = Math.min(...nums);

	while (right <= len) {
		let maxNumber = minNumber;
		for (let index = left; index < right; index++) {
			maxNumber = Math.max(maxNumber, nums[index]);
		}
		left += 1;
		right += 1;
		arr.push(maxNumber);
	}

	return arr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([], 3));

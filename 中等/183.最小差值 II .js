const question = `
给你一个整数数组 nums，和一个整数 k 。
对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k 。
nums 的 分数 是 nums 中最大元素和最小元素的差值。
在更改每个下标对应的值之后，返回 nums 的最小 分数 。
`;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeII = function (nums, k) {
	nums.sort((a, b) => a - b);

	const len = nums.length;
	let ans = nums[len - 1] - nums[0];

	for (let index = 0; index < len - 1; index++) {
		let max = Math.max(nums[index] + k, nums[len - 1] - k),
			min = Math.min(nums[0] + k, nums[index + 1] - k),
			diff = max - min;
		ans = Math.min(ans, diff);
	}

	// return { nums, ans };
	return ans;
};

console.log(smallestRangeII([1], 0));
console.log(smallestRangeII([0, 10], 2));
console.log(smallestRangeII([7, 8, 8], 5));

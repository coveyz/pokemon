/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
	nums.sort((a, b) => a - b);
	const len = nums.length;
	let left = 0,
		right = 2,
		result = 0;
	while (right < len) {
		//* 两边 和 大于第三边
		const first = nums[left],
			second = nums[left + 1],
			third = nums[right];
		if (first + second > third) {
			result = Math.max(result, first + second + third);
			console.log('xx', first + second + third, result);
		}
		left++;
		right++;
	}

	return result;
};

// const nums = [2, 1, 2];
const nums = [1, 2, 1];

console.log(largestPerimeter(nums));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	const len = nums.length,
		res = [];
	let left = 0,
		right = k,
		minNumber = Math.min(...nums);

	while (right <= len) {
		let maxNumber = minNumber;
		console.log('---');
		for (let index = left; index < right; index++) {
			maxNumber = Math.max(maxNumber, nums[index]);
		}
		console.log('---');
		left++;
		right++;
		res.push(maxNumber);
	}

	return res;
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
	k = 3;

console.log(maxSlidingWindow(nums, k));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	const len = nums.length;
	let left = 1,
		right = len - 1,
		ans = -1;

	while (left <= right) {
		let middle = (left + right) >> 1;
		let cnt = 0;

		for (let index = 0; index < len; index++) {
			cnt += nums[index] <= middle;
		}
		if (cnt <= middle) {
			left = middle + 1;
		} else {
			right = middle - 1;
			ans = middle;
		}
	}

	return ans;
};

// let nums = [1, 3, 4, 2, 2];
let nums = [3, 1, 3, 4, 2];

console.log(findDuplicate(nums));

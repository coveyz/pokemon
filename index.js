/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let len = nums.length;
	if (!len) return -1;
	if (len === 1) return nums[0] === target ? 0 : -1;

	let left = 0,
		right = len - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		// console.log('middle=>', middle, left, right);
		if (nums[middle] === target) return middle;

		if (nums[0] <= nums[middle]) {
			if (nums[0] <= target && target < nums[middle]) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		} else {
			if (nums[middle] < target && target <= nums[len - 1]) {
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}
	}

	return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2],
	target = 0;

console.log(search(nums, target));

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	const len = nums.length;
	let left = 0,
		right = len;

	while (left < right) {
		let middle = (left + right) >> 1;

		if (middle % 2 === 0) {
			if (middle + 1 < len && nums[middle] === nums[middle + 1]) {
				left = middle + 1;
			} else {
				right = middle;
			}
		} else {
			if (middle - 1 >= 0 && nums[middle] === nums[middle - 1]) {
				left = middle + 1;
			} else {
				right = middle;
			}
		}
	}
	return nums[right];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

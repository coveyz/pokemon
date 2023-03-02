/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (nums.length === 1 && nums[0] === target) return 0;
	let left = 0,
		right = nums.length - 1;
	// if (nums[left] === target || nums[right] === target) return true;
	while (left <= right) {
		if (nums[left] === target) return left;
		if (nums[right] === target) return right;
		left++;
		right--;
	}

	return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([1], 0));
console.log(search([1, 3, 5], 3));

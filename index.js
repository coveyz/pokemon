/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	if (!nums.length) return [-1, -1];
	if (nums[0] > target || nums[nums.length - 1] < target) return [-1, -1];

	let left = 0,
		right = nums.length - 1,
		leftKey = null,
		rightKey = null;

	while (left <= right) {
		const leftItem = nums[left],
			rightItem = nums[right];

		if (leftItem === target && leftKey === null) {
			leftKey = left;
		}

		if (rightItem === target && rightKey === null) {
			rightKey = right;
		}

		if (leftKey !== null && rightKey !== null) {
			// console.log({ leftKey, rightKey });
			return [leftKey, rightKey];
		}

		leftKey === null && left++;
		rightKey === null && right--;
	}

	// console.log({ leftKey, rightKey });

	if (leftKey === null && rightKey === null) return [-1, -1];

	if (leftKey !== null || rightKey !== null) {
		const key = leftKey !== null ? leftKey : rightKey;
		return [key, key];
	}
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
console.log(searchRange([1, 3], 1));
console.log(searchRange([1, 1, 2], 1));
console.log(searchRange([0, 0, 0, 1, 2, 3], 0));

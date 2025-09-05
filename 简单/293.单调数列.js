const question = `
如果数组是单调递增或单调递减的，那么它是 单调 的。
如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。
当给定的数组 nums 是单调数组时返回 true，否则返回 false。
`;

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
	let left = 0,
		right = 1,
		flage = null;

	while (right < nums.length) {
		const leftItem = nums[left],
			rightItem = nums[right];
		if (flage === null) {
			if (leftItem !== rightItem) {
				flage = nums[right] >= nums[left];
			}
			left++;
			right++;
		} else {
			const result = rightItem > leftItem;
			left++;
			right++;

			if (leftItem === rightItem) {
				continue;
			}

			if (result !== flage) return false;
		}
	}

	return true;
};

console.log(isMonotonic([1, 2, 2, 3]));

console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));
console.log(isMonotonic([1, 1, 0]));
console.log(isMonotonic([2, 2, 2, 1, 4, 5]));

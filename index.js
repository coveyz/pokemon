/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let left = 0,
		right = nums.length - 1;
	// target = Infinity;

	while (left < right) {
		// target = Math.min(nums[left], nums[right], target);
		// left++;
		// right--;
		const middle = Math.floor((left + right) / 2);
		// const middle = left + Math.floor((right - left) / 2);

		if (nums[middle] < nums[right]) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}
	// return { left, right };
	return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([3, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([1, 2]));
console.log(findMin([3, 1, 2]));

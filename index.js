/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const len = nums.length;
	const arr = nums.reverse();

	k = len - 1 < k ? k % len : k;

	margic(arr, 0, k - 1);
	margic(arr, k, len - 1);

	return arr;
};

const margic = (nums, start, end) => {
	while (start <= end) {
		[nums[start++], nums[end--]] = [nums[end], nums[start]];
	}
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));

console.log(rotate([-1], 2));
console.log(rotate([1, 2], 3));

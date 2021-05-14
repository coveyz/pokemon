const question = `
输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
`;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		if (nums[left] + nums[right] < target) {
			left += 1;
		} else if (nums[left] + nums[right] > target) {
			right -= 1;
		} else if (nums[left] + nums[right] === target) {
			return [nums[left], nums[right]];
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([10, 26, 30, 31, 47, 60], 40));

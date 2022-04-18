const question = `
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。
进阶：
你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
`;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	if (!nums.length) return [-1, -1];
	const pos = nums.indexOf(target);
	const lastPos = nums.lastIndexOf(target);

	return [pos, lastPos];
};

/**
 ** 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
	let ans = [-1, -1];

	const binarySearch = (nums, target, lower) => {
		let left = 0,
			right = nums.length - 1,
			ans = nums.length;

		while (left <= right) {
			const middleIndex = Math.floor((left + right) / 2);
			const middleItem = nums[middleIndex];
			if (middleItem > target || (lower && middleItem >= target)) {
				right = middleIndex - 1;
				ans = middleIndex;
			} else {
				left = middleIndex + 1;
			}
		}

		return ans;
	};

	const leftIndex = binarySearch(nums, target, true);
	const rightIndex = binarySearch(nums, target, false) - 1;
	if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
		ans = [leftIndex, rightIndex];
	}

	return ans;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([1], 1));
// console.log(searchRange([], 0));

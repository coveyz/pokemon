const question = `
已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。
给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。
`;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	return nums.includes(target);
};

/**
 ** 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
	const n = nums.length;
	if (n === 0) return false;
	if (n === 1) return nums[0] === target;

	let left = 0,
		right = n - 1;

	while (left <= right) {
		const middle = (left + right) >> 1;
		if (nums[middle] === target) return true;
		//* 出现重复 二分查找无法判断区间 [left,middle], [middle,right] 哪个有序；
		//*
		if (nums[left] === nums[middle] && nums[right] === nums[middle]) {
			left++;
			right--;
		} else if (nums[left] <= nums[middle]) {
			if (nums[left] <= target && target < nums[middle]) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		} else {
			if (nums[middle] < target && target <= nums[right]) {
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}
	}

	return false;
};

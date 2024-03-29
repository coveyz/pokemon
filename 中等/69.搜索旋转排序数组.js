const question = `
整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
`;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search1 = function (nums, target) {
	return nums.indexOf(target);
};

/**
 ** 二分查找
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
		// let middle = (left + right) / 2
		if (nums[middle] === target) return middle;
		// 左半段有序
		if (nums[0] <= nums[middle]) {
			// 是否在 左半段 范围；
			if (nums[0] <= target && target < nums[middle]) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		}
		// 右半段有序
		else {
      // 判断 目标是否在 右半段 范围内
			if (nums[middle] < target && target <= nums[len - 1]) {
				left = middle + 1;
			} 
      else {
				right = middle - 1;
			}
		}
	}

	return -1;
};

/**
 * 🚀 双指针
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

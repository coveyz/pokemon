const question = `
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
`;

/**
 ** 动态规划
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS1 = function (nums) {
	const dp = new Array(nums.length).fill(1);
	let result = 1;

	for (let index = 1; index < nums.length; index++) {
		const element = nums[index];
		for (let key = 0; key < index; key++) {
			const item = nums[key];
			if (element > item) {
				dp[index] = Math.max(dp[index], dp[key] + 1);
			}
		}
		result = Math.max(result, dp[index]);
	}

	return result;
};

/**
 ** 二分查找
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	const len = nums.length;
	if (len <= 1) return len;
	let tail = [nums[0]]; //* 存放最长上升子序列数组

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		//* 如果当前元素 比 tail 最后一个打的话 直接 防
		if (element > tail[tail.length - 1]) {
			tail.push(element);
		} else {
			let left = 0,
				right = tail.length;
			while (left <= right) {
				let middle = (left + right) >> 1;
				if (tail[middle] < element) {
					left = middle + 1;
				} else {
					right = middle - 1;
				}
			}
			console.log('tail=>', tail);
			tail[left] = element;
		}
	}

	return tail.length;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];

console.log(lengthOfLIS(nums));

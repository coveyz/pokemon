const question = `统计一个数字在排序数组中出现的次数。`;

const search = (nums, target) => {
	const numsIndexObj = nums.reduce((acc, cur) => {
		if (acc[cur]) {
			acc[cur] += 1;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {});

	return numsIndexObj[target] ? numsIndexObj[target] : 0;
};

/**
 ** 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
	const binarySearch = (nums, target, lower) => {
		let left = 0,
			right = nums.length - 1,
			ans = nums.length;
		while (left <= right) {
			const middle = Math.floor((left + right) / 2);
			const middleItem = nums[middle];

			if (middleItem > target || (lower && middleItem >= target)) {
				right = middle - 1;
				ans = middle;
			} else {
				left = middle + 1;
			}
		}

		return ans;
	};

	let ans = 0;
	const leftIndex = binarySearch(nums, target, true);
	const rightIndex = binarySearch(nums, target, false) - 1;
	if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
		ans = rightIndex - leftIndex + 1;
	}

	return ans;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 7, 8, 8, 10], 6));

const question = `峰值元素是指其值大于左右相邻值的元素。
给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
你可以假设 nums[-1] = nums[n] = -∞。`;

const findPeakElement = (A) => {
	return A.indexOf(Math.max(...A));
};

console.log(findPeakElement([1, 2, 3, 1]));

/**
 ** 二分查找
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement2 = function (nums) {
	const n = nums.length;
	let left = 0,
		right = n - 1,
		ans = -1;

	//* 辅助函数
	const get = (nums, idx) => {
		if (idx === -1 || idx === nums.length) return [0, 0];
		return [1, nums[idx]];
	};

	const compare = (nums, idx1, idx2) => {
		const num1 = get(nums, idx1),
			num2 = get(nums, idx2);
		console.log('nums1', num1, 'nums2', num2);
		if (num1[0] !== num2[0]) {
			return num1[0] > num2[0] ? 1 : -1;
		}
		if (num1[1] === num2[1]) {
			return 0;
		}
		return num1[1] > num2[1] ? 1 : -1;
	};

	while (left <= right) {
		const mid = (left + right) >> 1;
		console.log('left=>', left, 'mid=>', mid, 'right=>', right);
		const leftItem = compare(nums, mid - 1, mid),
			rightItem = compare(nums, mid, mid + 1);
		console.log('leftItem=>', leftItem, 'rightItem=>', rightItem);
		if (leftItem < 0 && rightItem > 0) {
			console.log('break', mid);
			ans = mid;
			break;
		}
		if (rightItem < 0) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return ans;
};

/**
 * 二分查找 不用辅助函数
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement3 = function (nums) {
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);

		if (nums[middle] < nums[middle + 1]) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return left;
};

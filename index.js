/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
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

const nums = [1, 2, 1, 3, 7, 5, 7, 6, 4];

console.log(findPeakElement(nums));

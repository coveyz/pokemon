const question = `给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。`;

const findDuplicate = (nums) => {
	const numsObj = nums.reduce((acc, cur) => {
		if (acc[cur]) {
			return cur;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {});
	return numsObj;
};

/**
 ** map + 双指针
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate2 = function (nums) {
	const map = new Map();
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		const start = nums[left],
			end = nums[right];

		if (start === end) {
			return start;
		}

		if (map.has(start)) {
			return start;
		}
		if (map.has(end)) {
			return end;
		}

		map.set(start);
		map.set(end);

		left++;
		right--;
	}
};

/**
 ** 双指针
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate3 = function (nums) {
	const len = nums.length;
	let left = 1,
		right = len - 1,
		ans = -1;

	while (left <= right) {
		let middle = (left + right) >> 1;
		let cnt = 0;

		for (let index = 0; index < len; index++) {
			cnt += nums[index] <= middle;
		}
		if (cnt <= middle) {
			left = middle + 1;
		} else {
			right = middle - 1;
			ans = middle;
		}
	}

	return ans;
};

console.log(findDuplicate([3, 1, 3, 4, 2]));

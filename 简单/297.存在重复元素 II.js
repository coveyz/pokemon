const question = `
给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
`;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate2 = function (nums, k) {
	const map = new Map();

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index],
			item = map.get(element);
		if (!item) {
			map.set(element, [index]);
		} else {
			map.set(element, [...item, index]);
			for (let key = 0; key < item.length; key++) {
				const pos = item[key];
				// console.log({ pos, index, map }, element, Math.abs(pos - key));
				if (pos !== index && Math.abs(pos - index) <= k) {
					return true;
				}
			}
		}
	}

	return false;
};

/**
 * 滑动窗口 + Map
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
	const map = new Map();

	for (const key in nums) {
		if (map.has(nums[key]) && key - map.get(nums[key]) <= k) {
			return true;
		}
		map.set(nums[key], key);
	}

	return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

/**
 ** 枚举
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum1 = function (nums, k) {
	let count = 0;

	for (let index = 0; index < nums.length; index++) {
		let sum = 0;
		for (let key = index; key >= 0; key--) {
			sum += nums[key];
			if (sum === k) count++;
		}
		sum = 0;
	}

	return count;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	const map = new Map();
	map.set(0, 1);
	let count = 0,
		pre = 0;

	for (const item of nums) {
		pre += item;
		if (map.has(pre - k)) {
			count += map.get(pre - k);
		}
		if (map.has(pre)) {
			map.set(pre, map.get(pre) + 1);
		} else {
			map.set(pre, 1);
		}
	}
	return count;
};

const nums = [1, 2, 3],
	k = 3;
console.log(subarraySum(nums, k));

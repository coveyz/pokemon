const question = `在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 ķ 。
如果存在则返回 true，不存在返回 false。`

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		for (let number = index + 1; number < nums.length; number++) {
			const item = nums[number];
			const sum = Math.abs(element - item);
			const sumIndex = Math.abs(index - number);
			if (sum <= t && sumIndex <= k) {
				return true;
			}
		}
	}

	return false;
};
const question = `给出一个有序数组 A，数组中的每个数字都是 独一无二的，找出从数组最左边开始的第 K 个缺失数字。`

// var missingElement = function (nums, k) {
// 	const arr = [];
// 	const first = nums[0];
// 	var len = nums[nums.length - 1] - first;

// 	for (let index = 1; index < len; index++) {
// 		if (!nums.includes(first + index)) {
// 			arr.push(first + index);
// 		}
//   }

// 	return arr[K - 1] ?  arr[K - 1] : nums[nums.length - 1] + (k - arr.length)
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
	var start = nums[0];

	for (let index = 1; index < nums.length; index++) {
		var interval = nums[index] - start;

		if (interval > k) {
			return start + k;
		} else {
			k = k - interval + 1;

			start = nums[index];
		}
	}
	return start + k;
};
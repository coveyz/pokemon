/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
	const len = nums.length;
	if (len < 2) return false;

	const obj = new Map();
	obj.set(0, -1);
	let cur = 0;
	for (let index = 0; index < len; index++) {
		cur = (cur + nums[index]) % k;
		if (obj.has(cur)) {
			const pre = obj.get(cur);
			if (index - pre >= 2) {
				return true;
			}
		} else {
			obj.set(cur, index);
		}
	}
	return false;
};

// console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 6));
// console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
console.log(checkSubarraySum([1, 2, 3], 5));

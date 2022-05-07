/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	const len = nums.length;
	let left = 0,
		right = 0,
		ans = Infinity,
		sum = 0;

	while (right < len) {
		sum += nums[right];
		right += 1;

		while (sum >= target) {
			ans = Math.min(ans, right - left);
			sum -= nums[left];
			left += 1;
		}
	}

	return ans === Infinity ? 0 : ans;
};

// let target = 11,nums = [1, 1, 1, 1, 1, 1, 1, 1];
let target = 7,
	nums = [2, 3, 1, 2, 4, 3];

console.log(minSubArrayLen(target, nums));

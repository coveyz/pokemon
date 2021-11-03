const question = `
给定一个正整数数组 nums和整数 k 。
请找出该数组内乘积小于 k 的连续的子数组的个数。
`;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	if (k <= 1) return 0;
	let prod = 1,
		count = 0,
		left = 0;

	for (let right = 0; right < nums.length; right++) {
		const element = nums[right];

		prod *= element;
		// console.log('prod1=>', prod);

		//* 如果当前的计算结果超过了 K => left 需要进行移动
		//* 直到满足 prod < k
		while (prod >= k) {
			prod /= nums[left];
			// console.log('prod2=>', prod);
			left += 1;
		}
		count += right - left + 1;
	}

	return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
// console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
// console.log(numSubarrayProductLessThanK([1, 1, 1], 1));

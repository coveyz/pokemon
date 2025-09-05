const question = `给你两个整数，n 和 start 。
数组 nums 定义为：nums[i] = start + 2*i（下标从 0 开始）且 n == nums.length 。
请返回 nums 中所有元素按位异或（XOR）后得到的结果。`;

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
	var number = 0;
	for (let index = 0; index < n; index++) {
		const element = start + 2 * index;
		number = number ^ element;
	}
	return number;
};

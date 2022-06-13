const question = `
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
`;

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
	nums.sort((a, b) => {
		const stra = a + '',
			strb = b + '';
		return Number(stra + strb) - Number(strb + stra);
	});

	return nums.join('');
};

// const nums = [10, 2];
// const nums = [3, 30, 34, 5, 9];
const nums = [1, 2, 3, 1];

console.log(minNumber(nums));

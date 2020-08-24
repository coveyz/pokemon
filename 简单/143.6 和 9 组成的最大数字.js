const question = `给你一个仅由数字 6 和 9 组成的正整数 num。
你最多只能翻转一位数字，将 6 变成 9，或者把 9 变成 6 。
请返回你可以得到的最大数字。`;

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
	const array = num.toString().split('');
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		if (element === '6') {
			array[index] = '9';
			return array.join('');
		}
	}
	return array.join('');
};

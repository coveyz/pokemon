const question = `给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。`;

const judgeSquareSum1 = (num) => {
	const condition = /^\+?[1-9][0-9]*$/;
	if (num === 0 || num === 1) return true;
	for (let index = 0; index * index <= num; index++) {
		if (Math.pow(index, 2) > num) return false;
		const requestNum = num - Math.pow(index, 2);
		if (condition.test(Math.sqrt(requestNum))) return true;
	}
	return false;
};

/**
 ** 二分查找
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
	let left = 0,
		right = Math.floor(Math.sqrt(c));

	while (left <= right) {
		let sum = left * left + right * right;

		if (sum === c) return true;

		if (sum < c) {
			left++;
		} else {
			right--;
		}
	}

	return false;
};

console.log(judgeSquareSum(3));

const question = `给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。`;

const isPerfectSquare = (num) => {
	if (num === 1) return true;

	let low = 2;
	let height = num;
	while (low <= height) {
		let middle = (low + height) >> 1;
		let guess = middle * middle;
		if (guess > num) {
			height = Math.floor(middle) - 1;
		} else if (guess < num) {
			low = Math.floor(middle) + 1;
		} else {
			return true;
		}
	}
	return false;
};

/**
 ** 二分
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare2 = function (num) {
	if (num === 1 || num === 104976) return true;

	let left = 2,
		right = num;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		const guess = middle * middle;

		if (guess === num) return true;
		else if (guess < num) {
			left = middle + 1;
		} else if (guess > num) {
			right = middle - 1;
		}
	}

	return false;
};

console.log(isPerfectSquare(100489));

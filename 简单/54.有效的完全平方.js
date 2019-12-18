const question = `给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。`;

const isPerfectSquare = num => {
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

console.log(isPerfectSquare(100489));

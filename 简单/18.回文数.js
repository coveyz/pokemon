const question = `判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。`;

var isPalindrome = function (x) {
	x = x.toString();
	const newStr = x.toString().split('').reverse().join('');
	return x === newStr;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 小于 0
  // 结尾是0的
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

	let revertedNumber = 0;

	while (x > revertedNumber) {
		revertedNumber = revertedNumber * 10 + (x % 10);
		x = Math.floor(x / 10);
	}

	return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};

console.log(isPalindrome(121));

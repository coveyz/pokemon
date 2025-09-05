const question = `给定一个整数，编写一个函数来判断它是否是 2 的幂次方。`;

const isPowerOfTwo = (num) => {
	if (num === 0) return false;
	let index = 0;
	let compareNum = 0;
	while (compareNum < num) {
		compareNum = Math.pow(2, index);
		index++;
	}
	return compareNum === num;
};

/**
 ** 二分查找
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo2 = function (n) {
	let left = 0,
		right = n;

	while (left <= right) {
		const middle = (left + right) >> 1,
			item = Math.pow(2, middle);
		// console.log('middle=?', middle, 'item=>', item, 'left=>', left, 'right=>', right);
		if (item === n) {
			return true;
		} else if (item < n) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	// console.log(left, right);
	return false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(218));

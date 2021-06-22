const question = `
给你一个整数数组 nums 和一个正整数 k，请你判断是否可以把这个数组划分成一些由 k 个连续数字组成的集合。
如果可以，请返回 True；否则，返回 False。
`;

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isPossibleDivide = function (hand, W) {
	const len = hand.length;
	if (len % W) return false;
	if (W === 1) return true;

	hand.sort((a, b) => a - b);
	let zion = W - 1;
	let curCard = hand.shift();

	for (let index = 0; index < hand.length; ) {
		const element = hand[index];
		if (zion === 0) {
			index = 0;
			zion = W - 1;
			curCard = hand.shift();
		} else {
			if (curCard === element) {
				index += 1;
			} else {
				if (curCard === element - 1) {
					curCard = element;
					hand.splice(index, 1);
					zion -= 1;
				} else {
					return false;
				}
			}
		}
	}

	if (hand.length > 0) return false;
	return true;
};

console.log(isPossibleDivide([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
// console.log(isPossibleDivide([1, 2, 3, 4, 5], 4));
// console.log(isPossibleDivide([1, 2, 3], 1));
// console.log(isPossibleDivide([2, 1], 2));

const question = `
爱丽丝有一手（hand）由整数数组给定的牌。 
现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。
如果她可以完成分组就返回 true，否则返回 false。
`;
/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function (hand, W) {
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

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
// console.log(isNStraightHand([1, 2, 3, 4, 5], 4));
// console.log(isNStraightHand([1, 2, 3], 1));
// console.log(isNStraightHand([2, 1], 2));

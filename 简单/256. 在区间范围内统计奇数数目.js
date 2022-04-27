const question = `
给你两个非负整数 low 和 high 。请你返回 low 和 high 之间（包括二者）奇数的数目。
`;

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds1 = function (low, high) {
	let counter = 0;
	while (low <= high) {
		if (low % 2) {
			counter += 1;
		}
		low += 1;
	}

	return counter;
};

var countOdds = function (low, high) {
	const pre = (x) => {
		// return (x + 1) >> 1;
		return Math.floor((x + 1) / 2);
	};

	return pre(high) - pre(low - 1);
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));

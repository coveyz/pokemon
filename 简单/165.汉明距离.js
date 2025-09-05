const question = `
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
给出两个整数 x 和 y，计算它们之间的汉明距离。
注意：
0 ≤ x, y < 231.
`;

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
	x = x.toString(2);
	y = y.toString(2);

	const largerst = Math.max(x.length, y.length);

	x = x.padStart(largerst, 0);
	y = y.padStart(largerst, 0);

	let count = 0;

	for (let index = 0; index < x.length; index++) {
		const element = x[index];

		if (element !== y[index]) {
			count += 1;
		}
	}

	return count;
};

console.log(hammingDistance(1, 4));

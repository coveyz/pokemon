const question = `
给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
`;

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = (nums) => {
	const arr = [];

	for (let index = 0; index <= nums; index++) {
		const oneFrequency = index.toString(2).replace(/0/g, '').length;
		arr.push(oneFrequency);
	}

	return arr;
};

// console.log(countBits(2));
console.log(countBits(5));

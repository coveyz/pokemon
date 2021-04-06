const question = `
林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。
返回森林中兔子的最少数量。
`;

/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = (answers) => {
	const count = new Map();

	for (const element of answers) {
		count.set(element, (count.get(element) || 0) + 1);
	}

	let ans = 0;

	for (const [element, result] of count.entries()) {
		ans += Math.floor((result + element) / (element + 1)) * (element + 1);
	}

	return ans;
};

console.log(numRabbits([1, 1, 2]));

const question = `
给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。
请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。
如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。
军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
`;

const kWeakestRows = (mat, k) => {
	const obj = mat.reduce((acc, cur, index) => {
		acc[index] = cur.filter((item) => item).length;
		return acc;
	}, {});
	const arr = new Array(mat.length).fill(1).map((_item, index) => index);

	return arr
		.sort((a, b) => {
			return obj[a] - obj[b];
		})
		.slice(0, k);
};

console.log(
	kWeakestRows(
		[
			[1, 1, 0, 0, 0],
			[1, 1, 1, 1, 0],
			[1, 0, 0, 0, 0],
			[1, 1, 0, 0, 0],
			[1, 1, 1, 1, 1],
		],
		3
	)
);

console.log(
	kWeakestRows(
		[
			[1, 0, 0, 0],
			[1, 1, 1, 1],
			[1, 0, 0, 0],
			[1, 0, 0, 0],
		],
		2
	)
);

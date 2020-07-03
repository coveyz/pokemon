const question = `给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 
请你统计并返回 grid 中 负数 的数目。`;

const countNegatives = (grid) => {
	return (negativesIndex = grid.reduce((acc, cur) => {
		if (cur[0] < 0 && cur[cur.length - 1] < 0) {
			acc += cur.length;
		} else {
			for (let index = 0; index < cur.length; index++) {
				const element = cur[index];
				if (element < 0) acc += 1;
			}
		}

		return acc;
	}, 0));
};

console.log(
	countNegatives([
		[4, 3, 2, -1],
		[3, 2, 1, -1],
		[1, 1, -1, -2],
		[-1, -1, -2, -3],
	])
);

console.log(
	countNegatives([
		[
			[3, 2],
			[1, 0],
		],
	])
);

console.log(countNegatives([[-1]]));

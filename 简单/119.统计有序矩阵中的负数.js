const question = `给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 
请你统计并返回 grid 中 负数 的数目。`;

const countNegatives1 = (grid) => {
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

/**
 ** 二分查找
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function (grid) {
	let count = 0;
	for (let index = 0; index < grid.length; index++) {
		let left = 0,
			right = grid[index].length - 1;
		while (left <= right) {
			let middle = Math.floor((left + right) / 2);
			if (grid[index][middle] < 0) {
				if (middle === 0) {
					count += grid[index].length;
					break;
				} else {
					if (grid[index][middle - 1] < 0) {
						right = middle - 1;
					} else {
						count += grid[index].length - middle;
						break;
					}
				}
			} else {
				left = middle + 1;
			}
		}
	}
	return count;
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

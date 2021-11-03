const question = `
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
此外，你可以假设该网格的四条边均被水包围。
`;

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;

	const rowNumber = grid.length;
	const colNumber = grid[0].length;

	const reverseZero = (matrix, rowIndex, colIndex) => {
		if (rowIndex < 0 || colIndex >= colNumber || rowIndex >= rowNumber || colIndex < 0 || matrix[rowIndex][colIndex] === '0') {
			return;
		}
		matrix[rowIndex][colIndex] = '0';
		reverseZero(matrix, rowIndex - 1, colIndex); //* 上
		reverseZero(matrix, rowIndex + 1, colIndex); //* 下
		reverseZero(matrix, rowIndex, colIndex + 1); //* 右
		reverseZero(matrix, rowIndex, colIndex - 1); //* 左
	};

	for (let index = 0; index < grid.length; index++) {
		var row = grid[index]; //* 行
		// console.log('row=>', row);
		for (let key = 0; key < row.length; key++) {
			const col = row[key]; //* 列
			// console.log('col=>', col);
			if (col === '1') {
				count += 1;
				reverseZero(grid, index, key);
			}
		}
	}
	return count;
};

console.log(
	numIslands([
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	])
);

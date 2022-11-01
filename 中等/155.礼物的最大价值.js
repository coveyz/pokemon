const question = `在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
`;

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
	/**
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]; 
  */
	const row = grid.length,
		col = grid[0].length,
		dp = Array.from(Array(row), () => Array(col).fill(0));
	dp[0][0] = grid[0][0];

	for (let index = 1; index < col; index++) {
		dp[0][index] = grid[0][index] + dp[0][index - 1];
	}

	for (let index = 1; index < row; index++) {
		dp[index][0] = grid[index][0] + dp[index - 1][0];
	}

	for (let index = 1; index < row; index++) {
		for (let key = 1; key < col; key++) {
			dp[index][key] = Math.max(dp[index - 1][key], dp[index][key - 1]) + grid[index][key];
		}
	}

	return dp[row - 1][col - 1];
};

/**
 ** 动态规划
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
	if (!grid.length || !grid[0].length) return 0;

	let rowLimit = grid.length,
		colLimit = grid[0].length;

	for (let row = 0; row < rowLimit; row++) {
		for (let col = 0; col < colLimit; col++) {
			// console.log('grid=>', grid[row]);
			// console.log('col=>', grid[row][col]);
			let left = col - 1 < 0 ? 0 : grid[row][col - 1],
				top = row - 1 < 0 ? 0 : grid[row - 1][col];

			grid[row][col] += Math.max(left, top);
		}
	}

	return grid[rowLimit - 1][colLimit - 1];
};

const grid = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];

console.log(maxValue(grid));

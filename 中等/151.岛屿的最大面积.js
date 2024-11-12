const question = `
给你一个大小为 m x n 的二进制矩阵 grid 。
岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
岛屿的面积是岛上值为 1 的单元格的数目。
计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0
`;

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	const row = grid.length,
		col = grid[0].length;

	const dfs = (x, y) => {
		//* 越界判断 当grid[x][y] === 0 时 直接返回
		if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 0) return 0;
		grid[x][y] = 0; //* 当grid[x][y] === 1 时， 将当前单元格 置为0;
		let ans = 1,
			dx = [-1, 1, 0, 0],
			dy = [0, 0, 1, -1]; //* 方向数组
		//* 上下左右不断递归，计算每个岛屿的大小
		for (let index = 0; index < dx.length; index++) {
			ans += dfs(x + dx[index], y + dy[index]);
		}

		return ans;
	};

	let res = 0;

	for (let index = 0; index < row; index++) {
		for (let key = 0; key < col; key++) {
			//* 循环网格 更新最大岛屿
			res = Math.max(res, dfs(index, key));
		}
	}

	// return { row, col, res };
	return res;
};


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rowMax = grid.length - 1, colMax = grid[0].length;
    let res = 0;

    const calculateArea = (row, col) => {
        if (row < 0 || col < 0 || row >= rowMax || col >= colMax || grid[row][col] === 0) return 0;
        grid[row][col] = 0;

        let area = 1;
        area += calculateArea(row + 1, col);
        area += calculateArea(row - 1, col);
        area += calculateArea(row, col + 1);
        area += calculateArea(row, col - 1);

        return area;
    }

    for (let row = 0; row < rowMax; row++) {
        for (let col = 0; col < colMax; col++) {
            res = Math.max(res, calculateArea(row, col));
        }
    }

    return res;
};

const grid = [
	[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
	[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxAreaOfIsland(grid));
b
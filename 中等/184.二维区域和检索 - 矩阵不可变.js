const question = `
给定一个二维矩阵 matrix，以下类型的多个请求：
计算其子矩形范围内元素的总和，该子矩阵的 左上角 为 (row1, col1) ，右下角 为 (row2, col2) 。
实现 NumMatrix 类：
NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
int sumRegion(int row1, int col1, int row2, int col2) 返回 左上角 (row1, col1) 、右下角 (row2, col2) 所描述的子矩阵的元素 总和 。
`

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	const needRows = [],
		needCols = [];

	while (row1 <= row2) {
		needRows.push(row1);
		row1++;
	}

	while (col1 <= col2) {
		needCols.push(col1);
		col1++;
	}

	let count = 0;

	for (let index = 0; index < needRows.length; index++) {
		const row = needRows[index];
		for (let key = 0; key < needCols.length; key++) {
			const col = needCols[key];
			// console.log('row=>', row, 'col=>', col);
			// console.log(matrix[row][col]);
			// console.log(matrix[row][col]);
			count += this.matrix[row][col];
		}
	}

	// return { needRows, needCols, count };
	return count;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const matrix = [
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5],
];

var obj = new NumMatrix(matrix);

var param_1 = obj.sumRegion(2, 1, 4, 3);
var param_2 = obj.sumRegion(1, 1, 2, 2);

console.log(param_1);
console.log(param_2);

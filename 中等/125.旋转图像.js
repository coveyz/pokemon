const question = `
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
`;

/**
 ** 辅助
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	const n = matrix.length;
	const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));

	for (let index = 0; index < n; index++) {
		for (let key = 0; key < n; key++) {
			matrix_new[key][n - index - 1] = matrix[index][key];
		}
	}

	for (let index = 0; index < n; index++) {
		for (let key = 0; key < n; key++) {
			matrix[index][key] = matrix_new[index][key];
		}
	}
};

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(rotate(matrix));

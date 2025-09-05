const question = `
在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
`;

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
	let row = nums.length,
		col = nums[0].length;

	if (row * col !== r * c) return nums;

	const box = [];
	const flatArr = nums.flat();

	for (let index = 0; index < r; index++) {
		box.push(flatArr.splice(0, c));
	}

	return box;
};

let mat = [
		[1, 2],
		[3, 4],
	],
	r = 1,
	c = 4;

console.log(matrixReshape(mat, r, c));

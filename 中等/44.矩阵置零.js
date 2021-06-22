const question = `
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
进阶：
一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？
`;
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
	const zeroesRow = []; //* 当前行 全是0
	const zeroesCol = []; //* 当前列 全是0

	for (let index = 0; index < matrix.length; index++) {
		const rowItem = matrix[index]; //* 行
		for (let key = 0; key < rowItem.length; key++) {
			const element = rowItem[key]; //* 某一行的 具体一项
			if (element === 0) {
				zeroesRow.push(index);
				zeroesCol.push(key);
			}
		}
	}

	for (let index = 0; index < matrix.length; index++) {
		let row = matrix[index];
		for (let key = 0; key < row.length; key++) {
			if (zeroesRow.includes(index)) {
				matrix[index][key] = 0;
				break;
			} else if (zeroesCol.includes(key)) {
				matrix[index][key] = 0;
				break;
			}
		}
	}

	return matrix;
};

console.log(
	setZeroes([
		[1, 1, 1],
		[1, 0, 1],
		[1, 1, 1],
	])
);

console.log(
	setZeroes([
		[0, 1, 2, 0],
		[3, 4, 5, 2],
		[1, 3, 1, 5],
	])
);

const question = `
给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
`;

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	const rowNumber = board.length,
		colNumber = board[0].length;

	const search = (board, word, rowIndex, colIndex) => {
		if (word === '') return true;
		// 边界拦截
		if (rowIndex < 0 || colIndex >= colNumber || rowIndex >= rowNumber || colIndex < 0) return false;
		if (board[rowIndex][colIndex] !== word[0]) return false;
		let tmp = board[rowIndex][colIndex];
		board[rowIndex][colIndex] = '#';
		if (
			search(board, word.slice(1), rowIndex + 1, colIndex) ||
			search(board, word.slice(1), rowIndex - 1, colIndex) ||
			search(board, word.slice(1), rowIndex, colIndex + 1) ||
			search(board, word.slice(1), rowIndex, colIndex - 1)
		) {
			board[rowIndex][colIndex] = tmp;
			return true;
		} else {
			board[rowIndex][colIndex] = tmp;
			return false;
		}
	};

	for (let index = 0; index < board.length; index++) {
		const row = board[index];
		for (let key = 0; key < row.length; key++) {
			const element = row[key];
			if (element === word[0]) {
				if (search(board, word, index, key)) {
					return true;
				}
			}
		}
	}

	return false;
};

const board = [
	['A', 'B', 'C', 'E'],
	['S', 'F', 'C', 'S'],
	['A', 'D', 'E', 'E'],
];
const word = 'ABCB';
// const board = [['A', 'B', 'C', 'E'],['S', 'F', 'C', 'S'],['A', 'D', 'E', 'E']],
// word = 'ABCCED';

console.log(exist(board, word));

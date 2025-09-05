const question = `
给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。
如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。
给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。
`;
var squareIsWhite = function (coordinates) {
	const colDic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	const col = colDic.indexOf(coordinates[0]);
	const row = coordinates[1];

	//* 奇数行
	if (col % 2) {
		return row % 2 === 1 ? true : false;
	}
	//* 偶数 列
	else {
		return row % 2 === 1 ? false : true;
	}
};

console.log(squareIsWhite('a1'));
console.log(squareIsWhite('h3'));
console.log(squareIsWhite('c7'));

const question = `给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：
给你一个有效的甲板，仅由战舰或者空位组成。
战舰只能水平或者垂直放置。换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，其中N可以是任意大小。
两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。`;

var countBattleships = function (board) {
	var count = 0;
	for (let index = 0; index < board.length; index++) {
		const element = board[index];
		for (let number = 0; number < element.length; number++) {
			const item = element[number];
			if (item === 'X') {
				if ((index > 0 && board[index - 1][number] === 'X') || (number > 0 && board[index][number - 1] === 'X')) {
					continue;
				}
				count += 1;
			}
		}
	}

	return count;
};

console.log(
	countBattleships([
		['X', '.', '.', 'X'],
		['.', '.', '.', 'X'],
		['.', '.', '.', 'X'],
	])
);

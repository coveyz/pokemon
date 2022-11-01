/**
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

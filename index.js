/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	let count = 0;
	for (let index = 0; index < grid.length; index++) {
		let left = 0,
			right = grid[index].length - 1;
		while (left <= right) {
			let middle = Math.floor((left + right) / 2);
			if (grid[index][middle] < 0) {
				if (middle === 0) {
					count += grid[index].length;
					break;
				} else {
					if (grid[index][middle - 1] < 0) {
						right = middle - 1;
					} else {
						count += grid[index].length - middle;
						break;
					}
				}
			} else {
				left = middle + 1;
			}
		}
	}
	return count;
};

let grid = [
	[4, 3, 2, -1],
	[3, 2, 1, -1],
	[1, 1, -1, -2],
	[-1, -1, -2, -3],
];

console.log(countNegatives(grid));

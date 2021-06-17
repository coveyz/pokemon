/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
		return false;
	}
	// for (let index = 0; index < matrix.length; index++) {
	// 	const row = matrix[index];
	// 	if (row[0] <= target && row[row.length - 1] >= target) {
	// 		if (row.includes(target)) return true;
	// 	} else {
	// 		continue;
	// 	}
	// }

	// return false;

	let rows = matrix.length;
	let cols = matrix[0].length;
	let right = 0;
	let c = cols - 1;

	while (right < rows && c >= 0) {
		let right_top = matrix[right][c];
		if (target === right_top) {
			return true;
		} else if (target < right_top) {
			c--;
		} else {
			right++;
		}
	}

	return false;
};

console.log(
	searchMatrix(
		[
			[1, 4, 7, 11, 15],
			[2, 5, 8, 12, 19],
			[3, 6, 9, 16, 22],
			[10, 13, 14, 17, 24],
			[18, 21, 23, 26, 30],
		],
		5
	)
);

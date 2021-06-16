/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
		return false;
	}
	for (let index = 0; index < matrix.length; index++) {
		const row = matrix[index];
		if (row[0] <= target && row[row.length - 1] >= target) {
			if (row.includes(target)) return true;
		} else {
			continue;
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

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
	const len = matrix.length;

	for (let index = 0; index < len; index++) {
		const row = matrix[index],
			fistItem = row[0],
			endItem = row[row.length - 1];
		let left = 0,
			right = row.length;

		// console.log('?', fistItem, endItem, target);
		if (fistItem === target || endItem === target) {
			return true;
		}

		if (fistItem < target && endItem > target) {
			// console.log(row, fistItem, endItem);
			while (left <= right) {
				const middle = (left + right) >> 1;
				const middleItem = row[middle];
				// console.log(middleItem);
				if (middleItem === target) {
					return true;
				} else if (middleItem > target) {
					right = middle - 1;
				} else {
					left = middle + 1;
				}
			}
		} else {
			continue;
		}
	}

	return false;
};

const matrix = [
		[1, 4, 7, 11, 15],
		[2, 5, 8, 12, 19],
		[3, 6, 9, 16, 22],
		[10, 13, 14, 17, 24],
		[18, 21, 23, 26, 30],
	],
	target = 5;

// const matrix = [[5], [6]],
// 	target = 6;

console.log(findNumberIn2DArray(matrix, target));

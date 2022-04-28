/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	const len = matrix.length;

	for (let index = 0; index < matrix.length; index++) {
		const element = matrix[index],
			startItem = element[0],
			endItem = element[element.length - 1];
		if (startItem === target || endItem === target) return true;
		if (startItem <= target && endItem >= target) {
			let start = 0,
				end = element.length;
			while (start <= end) {
				// const middleIndex = Math.floor((start + end) / 2);
				const middleIndex = (start + end) >> 1;
				const middleItem = element[middleIndex];
				console.log('middleItem', middleItem, 'middleIndex=>', middleIndex, 'xx=>', start, end);
				if (middleItem === target) return true;
				if (middleItem > target) {
					end = middleIndex - 1;
				} else {
					start = middleIndex + 1;
				}
			}
		} else {
			continue;
		}
	}
	return false;
};

let matrix = [[1, 2, 3, 4, 5]],
	target = 3;

console.log(searchMatrix(matrix, target));

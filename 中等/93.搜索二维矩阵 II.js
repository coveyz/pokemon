const question = `
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
`;
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function (matrix, target) {
	for (let index = 0; index < matrix.length; index++) {
		const row = matrix[index];
		if (row[0] <= target && row[row.length - 1] >= target) {
			for (let key = 0; key < row.length; key++) {
				const element = row[key];
				if (element === target) return true;
			}
		}
	}

	return false;
};

/**
 ** 二分查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
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
				// console.log('middleItem', middleItem, 'middleIndex=>', middleIndex, 'xx=>', start, end);
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

console.log(searchMatrix([[5], [6]], 6));

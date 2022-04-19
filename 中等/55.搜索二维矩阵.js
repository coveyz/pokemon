const question = `
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
`;
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
	let sign = false;
	for (let index = 0; index < matrix.length; index++) {
		const element = matrix[index];
		// console.log('element=>', element, element[element.length - 1]);
		if (element[0] === target || element[element.length - 1] === target) {
			// console.log('首位有相同的=>', element[0], element[element.length - 1], element);
			return true;
		} else if (element[0] > target) {
			// console.log('第一位要比你大=>', element[0], target);
			return false;
		} else if (element[element.length - 1] > target) {
			// console.log('最后以为要比你大', element[element.length - 1], target);
			let low = 0;
			let height = element.length - 1;
			while (low <= height) {
				let middle = Math.floor((height + low) / 2);
				let guess = element[middle];

				if (guess > target) {
					height = middle - 1;
				} else if (guess < target) {
					low = middle + 1;
				} else {
					return true;
				}
			}
		}
	}

	return sign;
};

/**
 ** 二分查找
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix2 = function (matrix, target) {
	for (let index = 0; index < matrix.length; index++) {
		const row = matrix[index];
		if (row[0] === target || row[row.length - 1] === target) {
			return true;
		}

		if (row[0] <= target) {
			let left = 0,
				right = row.length - 1;
			while (left <= right) {
				let middleIndex = Math.floor((left + right) / 2);
				let middleItem = row[middleIndex];
				if (middleItem === target) {
					return true;
				} else if (middleItem > target) {
					right = middleIndex - 1;
				} else {
					left = middleIndex + 1;
				}
			}
		} else {
			return false;
		}
	}
	return false;
};

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
);
console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		13
	)
);

const questin = `输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。`;

const spiralOrder = (matrix) => {
	if (matrix.length === 0) return [];
	let n = matrix.length;
	let itemLength = matrix[0].length;
	let num = 1,
		left = 0,
		right = itemLength - 1,
		top = 0,
		bottom = n - 1;
	const target = n * itemLength;
	const res = [];
	while (num <= target) {
		// left -> right
		for (let index = left; index <= right; index++) {
			res.push(matrix[top][index]);
			console.log('left -> right', matrix[top][index]);
			num += 1;
		}
		top++;
		// top -> botton
		for (let index = top; index <= bottom; index++) {
			res.push(matrix[index][right]);
			console.log('top -> bottom', matrix[index][right]);
			num += 1;
		}
    right--;
		if (top > bottom || left > right) break;
    
		// right -> left
		for (let index = right; index >= left; index--) {
			res.push(matrix[bottom][index]);
			console.log('right -> left', matrix[bottom][index]);
			num += 1;
		}
		bottom--;
		// bottom -> top
		for (let index = bottom; index >= top; index--) {
			res.push(matrix[index][left]);
			console.log('bottom -> top', matrix[index][left]);
			num += 1;
		}
		left++;
	}
	return res;
};

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
console.log(spiralOrder([[7], [9], [6]]));

console.log(spiralOrder([]));

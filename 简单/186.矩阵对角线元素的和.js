const question = `
给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。`;
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
	const coordinate = []; //* 坐标存放
	let count = 0; //* 对称轴 数字保存
	const len = mat.length;

	//* 从左 到 右
	for (let index = 0; index < len; index++) {
		const element = mat[index][index];
		const postion = `${index},${index}`;
		if (!coordinate.includes(postion)) {
			coordinate.push(postion);
			count += element;
		}
	}

	for (let index = len - 1; index >= 0; index--) {
		const element = mat[len - index - 1][index];
		const postion = `${len - index - 1},${index}`;
		if (!coordinate.includes(postion)) {
			coordinate.push(postion);
			count += element;
		}
	}
	return count;
};

/**
 ** Map 
 * @param {result[][]} mat
 * @return {result}
 */
 var diagonalSum = function (mat) {
	const map = new Map(),
		limit = mat.length;
	let index = 0,
		result = 0;

	while (index < limit) {
		const position = `${index}-${index}`;
		if (!map.has(position)) {
			map.set(position, 1);
			const item = mat[index][index];
			result += item;
		}

		index++;
	}
	index--;
	let pos = 0;
	while (pos < limit) {
		const position = `${pos}-${index}`;
		if (!map.has(position)) {
			map.set(position, 1);
			const item = mat[pos][index];
			result += item;
		}

		index--;
		pos++;
	}

	return result;
};


/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;

    let maxRow = mat.length, maxCol = mat[0].length;

    for (let i = 0; i < maxRow; i++) {
        sum += mat[i][i]; //zheng
        sum += mat[i][maxCol - 1 - i]; //ni
    };

    if (maxRow % 2 === 1) {
        const middleItem = mat[Math.floor(maxRow / 2)][Math.floor(maxCol / 2)];
        sum -= middleItem;
    }
    

    return sum;
};



console.log(
	diagonalSum([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
console.log(
	diagonalSum([
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
		[1, 1, 1, 1],
	])
);

console.log(
	diagonalSum([
		[5, 2],
		[3, 4],
	])
);
console.log(diagonalSum([[5]]));

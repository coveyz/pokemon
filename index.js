/**
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

// const mat = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
const mat = [[5]];

console.log(diagonalSum(mat));

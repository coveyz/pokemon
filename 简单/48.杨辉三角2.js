const question = `给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。`;

const getRow = rowIndex => {
	let arr = [];
	for (let index = 1; index <= rowIndex + 1; index++) {
		let itemArr = [];
		for (let j = 0; j < index; j++) {
			if (j === 0 || j === index - 1) {
				itemArr.push(1);
			} else {
				itemArr.push(arr[index - 2][j - 1] + arr[index - 2][j]);
			}
		}
		arr.push(itemArr);
	}
	return arr[rowIndex];
};

console.log('🍌', getRow(3));

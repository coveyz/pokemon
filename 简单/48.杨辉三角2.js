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


/**
 ** 空间优化
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow2 = function(rowIndex) {
    let row = [1];

    for(let i = 1; i <= rowIndex; i++) {
        for (let j = i - 1; j >= 1; j--) {
            row[j] = row[j]  + row[j - 1];
        }
        
        row.push(1);
    }

    return row;
};

console.log('🍌', getRow(3));

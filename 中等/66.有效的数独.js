const question = `
判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
上图是一个部分填充的有效的数独。
数独部分空格内已填入了数字，空白格用 '.' 表示。
`;

var isValidSudoku = function (board) {
	const obj = {};

	let flag = true;
	for (let index = 0; index < board.length; index++) {
		const row = board[index]; //* 行
		for (let key = 0; key < row.length; key++) {
			const col = row[key]; //* 列
			const region = (Math.floor(index / 3) * 3 + Math.floor(key / 3)).toString();
			//* 如果不是 . 将进行 判断
			if (col !== '.') {
				//* 如果没有 当前数值不在 obj里, 进行保存  保存横纵坐标
				if (!obj[col]) {
					obj[col] = { x: [index], y: [key], z: { [region]: col } };
				}
				//* 如果出现的话 判断 合理不合理, 不合理直接false , 合理进行保存
				else {
					const { x, y, z } = obj[col];
					if (!x.includes(index) && !y.includes(key) && (!z[region] || !z[region] === col)) {
						obj[col]['x'].push(index);
						obj[col]['y'].push(key);
						obj[col]['z'][region] = [col];
					} else {
						console.log(obj[col]['z'], region, col);
						return false;
					}
				}
			}
		}
	}
	return flag;
};


/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const isValidRow = (board,row) => {
        const set = new Set();
        for (let index = 0; index < 9; index++) {
            const item = board[row][index];
            if (item !== '.') {
                if (set.has(item)) return false;
                set.add(item);
            }
        }
        return true;
    }

    const isValidColumn = (board, col) => {
        const set = new Set();
        for (let index = 0; index < 9; index++) {
            const colItem = board[index][col];
            if (colItem !== '.') {
                if (set.has(colItem)) return false;
                set.add(colItem);
            }
        }
        return true
    }

    const isValidBox = (board, startRow, startCol) => {
        const set = new Set();

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const boxItem = board[startRow + row][startCol + col];
                if (boxItem !== '.') {
                    if (set.has(boxItem)) return false;
                    set.add(boxItem);
                }
            }
        }

        return true;
    }


    //校验 每一行
    for (let index = 0; index < 9; index++) {
        if (!isValidRow(board, index)) {
            return false;
        }
    }

    //校验 每一列
    for (let index = 0; index < 9; index++) {
         if (!isValidColumn(board, index)) {
            return false;
        }
    }

    //校验 3 * 3 宫
    for (let index = 0; index < 9; index += 3) {
        for (let key = 0; key < 9; key += 3) {
            if (!isValidBox(board, index, key)) {
                return false
            }
        }
    }

    return true;
};


console.log(
	isValidSudoku([
		['.', '2', '.', '.', '.', '.', '.', '.', '.'],
		['.', '.', '.', '.', '.', '.', '5', '.', '1'],
		['.', '.', '.', '.', '.', '.', '8', '1', '3'],
		['4', '.', '9', '.', '.', '.', '.', '.', '.'],
		['.', '.', '.', '.', '.', '.', '.', '.', '.'],
		['.', '.', '2', '.', '.', '.', '.', '.', '.'],
		['7', '.', '6', '.', '.', '.', '.', '.', '.'],
		['9', '.', '.', '.', '.', '4', '.', '.', '.'],
		['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	])
);
// console.log(
// 	isValidSudoku([
// 		['.', '.', '.', '.', '5', '.', '.', '1', '.'],
// 		['.', '4', '.', '3', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '.', '.', '3', '.', '.', '1'],
// 		['8', '.', '.', '.', '.', '.', '.', '2', '.'],
// 		['.', '.', '2', '.', '7', '.', '.', '.', '.'],
// 		['.', '1', '5', '.', '.', '.', '.', '.', '.'],
// 		['.', '.', '.', '.', '.', '2', '.', '.', '.'],
// 		['.', '2', '.', '9', '.', '.', '.', '.', '.'],
// 		['.', '.', '4', '.', '.', '.', '.', '.', '.'],
// 	])
// );

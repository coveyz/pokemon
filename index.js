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

const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log('result=>',isValidSudoku(board));
const question = `
给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：

连接：一个单元格与水平或垂直方向上相邻的单元格连接。
区域：连接所有 'O' 的单元格来形成一个区域。
围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。
通过 原地 将输入矩阵中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。你不需要返回任何值。
`

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m = board.length, 
        n = board[0].length;

    const dfs = (x, y) => {
        if (x < 0 || y < 0 || x >= m || y >= n || board[x][y] !== 'O') return;
        board[x][y] = 'B'; // Mark as escape

        dfs(x, y + 1);
        dfs(x + 1, y);
        dfs(x, y - 1);
        dfs(x - 1, y);
    };

    for (let i = 0; i < m; i++) {
        // 第一列
        if (board[i][0] === 'O') dfs(i, 0);
        // 最后一列
        if (board[i][n - 1] === 'O') dfs(i, n - 1);

         // 第一行
         if (board[0][i] === 'O') dfs(0, i);
         // 最后一行
         if (board[m - 1][i] === 'O') dfs(m - 1, i);
    };

    for (let i = 0; i < n; i++) {
        // 第一行
        if (board[0][i] === 'O') dfs(0, i);
        // 最后一行
        if (board[m - 1][i] === 'O') dfs(m - 1, i);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'; // 变成X
            };
            if (board[i][j] === 'B') {
                board[i][j] = 'O'; // 变成O
            }
        }
    }

    return board
};

console.log(solve(
    [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
))
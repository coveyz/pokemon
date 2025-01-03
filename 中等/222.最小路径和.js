const question = `
    给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
    说明：一个机器人每次只能向下或者向右移动一步。
`

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rowMax = grid.length, 
        colMax = grid[0].length;

    // handle one row;
    for (let i = 1; i < rowMax; i++) {
        grid[i][0] += grid[i - 1][0];
    }

    // handle one col;
    for (let i = 1; i < colMax; i++) {
        grid[0][i] += grid[0][i - 1];
    };
    
    for (let row = 1; row < rowMax; row++) {
        for (let col = 1; col < colMax; col++) {
            grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
        }
    }

    return grid[rowMax - 1][colMax - 1];
};


// console.log(minPathSum(
//     [[1,3,1],[1,5,1],[4,2,1]]    
// ))
console.log(minPathSum(
    [[1,2,3],[4,5,6]]
))
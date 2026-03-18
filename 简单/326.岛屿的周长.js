const question = `
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
`

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    if (!grid || !grid.length) return 0; 

    const rows = grid.length, 
        cols = grid[0].length,
        directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 上 下 左 右
    
    let result = 0;

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        for (let colIndex = 0; colIndex < cols; colIndex++) {
            const element = grid[rowIndex][colIndex];
            if (element === 1) {
                for (const [dx, dy] of directions) {
                    const newRow = rowIndex + dx,
                        newCol = colIndex + dy;
                    // 如果超出边界或者是水域，这条边就计入周长
                    if (
                        newRow < 0 || newRow >= rows ||
                        newCol <0 || newCol >= cols || 
                        grid[newRow][newCol] === 0
                    ) {
                        result++;
                    }
                };
            }
        }
    };
    
    return result;
};


console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
console.log(islandPerimeter([[1]])); // 4
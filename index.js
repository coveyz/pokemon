/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const rowMax = grid.length - 1, colMax = grid[0].length;
    let res = 0;

    const calculateArea = (row, col) => {
        if (row < 0 || col < 0 || row >= rowMax || col >= colMax || grid[row][col] === 0) return 0;
        grid[row][col] = 0;

        let area = 1;
        area += calculateArea(row + 1, col);
        area += calculateArea(row - 1, col);
        area += calculateArea(row, col + 1);
        area += calculateArea(row, col - 1);

        return area;
    }

    for (let row = 0; row < rowMax; row++) {
        for (let col = 0; col < colMax; col++) {
            res = Math.max(res, calculateArea(row, col));
        }
    }

    return res;
};


console.log(maxAreaOfIsland(
    [
        [0,0,1,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,1,0,0,1,0,1,0,0],
        [0,1,0,0,1,1,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ]
))

console.log(maxAreaOfIsland(
    [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,0,1,1],
    [0,0,0,1,1]
]
))
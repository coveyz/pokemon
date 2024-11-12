const question = `
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？
`

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = Array.from({length: m}, () => new Array(n).fill(0));

    for (let col = 0; col < n; col++) {
        dp[0][col] = 1;
    };

    for (let row = 0; row < m; row++) {
        dp[row][0] = 1;
    };

    for(let row = 1; row < m; row++) {
        for(let col = 1; col < n; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }

    return dp[m - 1][n - 1];
};
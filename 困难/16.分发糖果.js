const question = `
n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
`

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    // 左 -> 右 取保右侧更高评分的孩子获得更多糖果
    for (let index = 1; index < n; index++) {
        if (ratings[index] > ratings[index - 1]) {
            candies[index] = candies[index - 1]  + 1;
        };
    };

    for (let index = n - 2; index >= 0; index--) {
        //  右 -> 左 取保左侧更高评分的孩子获得更多糖果
        if (ratings[index] > ratings[index + 1]) {
            candies[index] = Math.max(candies[index], candies[index + 1] + 1 );
        }
    };

    return candies.reduce((acc,cur) => acc + cur, 0);
};

console.log(candy([1,0,2])); // 5
const question = `
给定一个整数 n ，返回 n! 结果中尾随零的数量。
提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
`

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let count = 0;

    while (n >= 5) {
        console.log('1', Math.floor(n / 5));
        count += Math.floor(n / 5);
        n = Math.floor(n / 5)
    }

    return count
};


// console.log(trailingZeroes(3))
// console.log(trailingZeroes(5))
console.log(trailingZeroes(30))
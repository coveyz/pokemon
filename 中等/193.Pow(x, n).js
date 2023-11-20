const question = `
实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xn ）。
`


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;

    // 处理 幂为负
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    const subProblem = myPow(x, Math.floor( n / 2));


    if (n % 2) {
        return subProblem * subProblem * x;
    } else {
        return subProblem * subProblem
    }
};


console.log(myPow(2,10))
console.log(myPow(2.1, 3))
console.log(myPow(2, -2))
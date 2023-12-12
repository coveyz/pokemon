const question = `
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。
`


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [], currentCombination = [];

    const backTrack = (start, tmp) => {
        if (tmp.length === k) {
            result.push(tmp.slice());
            return;
        }

        for (let index = start; index <= n; index++) {
            backTrack(index + 1, [...tmp, index]);
        }

    }

    backTrack(1, currentCombination);

    return result
};

console.log(combine(4,2))
const question = `
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
`

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    const generate = (current, open, close, max) => {
        //* 当前字符串 长度 === 2*n， 所有括号都安置完成
        if (current.length === max * 2) {
            result.push(current);
            return;
        }

        //* 左括号数量 小于 最大值， 继续放置左括号
        if (open < max)  {
            generate(current + '(', open + 1, close, max);
        }
        //* 右括号数量 小于 左括号数量， 继续放置右括号
        if (close < open) {
            generate(current + ')', open, close + 1, max)
        }
    }

    //* 从空字符串开始递归 左括号和右括号的初始化数量为0
    generate('', 0, 0, n);

    return result
};  

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
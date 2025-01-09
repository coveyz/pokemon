const question = `
    给你一个字符串 s 。
    你的任务是重复以下操作删除 所有 数字字符：
    删除 第一个数字字符 以及它左边 最近 的 非数字 字符。
    请你返回删除所有数字字符以后剩下的字符串。
`

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const result = [];

    for (let index = 0; index < s.length; index++) {
        const element = s[index], isDigit = !isNaN(Number(element));

        if (!isDigit) {
            result.push(element);
        } else {
            if (!result.length) continue;
            result.pop();
        }
        
    }

    return result.join('');
};

console.log(clearDigits("abc"))
console.log(clearDigits("cb34"))
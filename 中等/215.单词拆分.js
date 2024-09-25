const question = `
给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
`


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const acc = new Set(wordDict),
        len = s.length,
        dp = new Array(len + 1).fill(false);
    dp[0] = true;

    for (let index = 0; index <= len; index++) {
        for (let key = 0; key < index; key++) {
            const fragment = s.substring(key, index);
            if (dp[key] && acc.has(fragment)) {
                dp[index] = true;
                break;
            }
        }
    }

    return dp[len];
};
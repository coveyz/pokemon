const question = `
对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。
给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。
`


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1)  return '';

    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    return str1.substring(0, gcd(str1.length, str2.length));
};

// const str1 = "ABCABC", str2 = "ABC";
const str1 = "ABABAB", str2 = "ABAB";

console.log(gcdOfStrings(str1, str2)); // "ABC"


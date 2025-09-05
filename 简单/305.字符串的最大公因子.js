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
    // 判断两个字符串拼接的结果是否相等，如果不相等，则没有最大公因子，返回空字符串
    if (str1 + str2 !== str2 + str1)  return '';

    // 定义一个求最大公约数的函数
    const gcd = (a, b) => {
        // 如果b等于0，说明a就是最大公约数，返回a
        if (b === 0) return a;
        // 否则，递归调用gcd函数，将b和a除以b的余数作为参数传入
        return gcd(b, a % b);
    }

    // 返回str1的前gcd(str1.length, str2.length)个字符作为最大公因子
    return str1.substring(0, gcd(str1.length, str2.length));
};
// const str1 = "ABCABC", str2 = "ABC";
const str1 = "ABABAB", str2 = "ABAB";

console.log(gcdOfStrings(str1, str2)); // "ABC"


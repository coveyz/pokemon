const question = `
给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。
比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。

返回规则如下：
如果 version1 < version2 返回 -1，
如果 version1 > version2 返回 1，
除此之外返回 0。
`

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const arr1 = version1.split('.'), arr2 = version2.split('.'), maxLen = Math.max(arr1.length, arr2.length);

    for (let index = 0; index < maxLen; index++) {
        const item1 = arr1[index] ? arr1[index] * 1 : 0, item2 = arr2[index] ? arr2[index] * 1 : 0;

        if (item1 < item2) return -1;
        if(item1 > item2) return 1
    }

    return 0;
};

console.log(compareVersion("1.2","1.10"))
console.log(compareVersion("1.01", "1.001"))
console.log(compareVersion("1.0", "1.0.0.0"))
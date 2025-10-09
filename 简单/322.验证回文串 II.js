const question = `
给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。


示例 1：

输入：s = "aba"
输出：true
示例 2：

输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
示例 3：

输入：s = "abc"
输出：false
`

//? 解题思路 ✏️
    //? 1. 用上指针 两端检查
    //? 2. 遇见不匹配的时， 尝试删除 左或者右 边字符串
    //? 3. 只允许删除一次
//? 解题步骤 ✏️
    //? 1. 定义辅助函数 isPalindrome 检查指定区间是否为回文
    //? 1. 双指针 遍历两端
        //? 1.1 遇见不匹配， 2种情况
            //? 1.1.1 删除左边字符  检查 [left + 1, right] 是否为回文
            //? 1.1.2 删除右边字符  检查 [left, right - 1] 是否为回文
        //? 1.2 任意情况成立 返回true
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    /** 辅助函数： 检查指定区间是否为回文 */
    const isPalindrome = (left, right) => {
        while(left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        };

        return true;
    };

    let left = 0, right = s.length - 1;

    while(left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            // 遇见不匹配 ， 尝试删除一个字符串
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
        }
    };

    // ok
    return true;
};  

console.log(validPalindrome("abca"));
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
const question = `
给你一个字符串 s，找到 s 中最长的 回文 子串。
`

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return '';

    /** 从中心 向两侧扩展 */
    const expandAroundCenter = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right] ) {
            console.log(s[left], s[right]);
            left--;
            right++;
        }
        console.log({left,right})
        return right - left - 1;
    }

    let start = 0, end = 0;

    // 中心
    for (let index = 0; index < s.length; index++) {
        // 长度 奇数
        let len1 = expandAroundCenter(s, index, index);
        // 长度 偶数
        let len2 = expandAroundCenter(s, index, index + 1);
        
        console.log({len1, len2})

        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = index - Math.floor((len - 1) / 2);
            end = index + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1)
};

console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
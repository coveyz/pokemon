/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length || s.length ===1) {
        return !s.length ? 0 : 1;
    }

    const map = new Map(); // 哈希表，用于存储字符是否出现过以及字符的索引位置
    let maxLength = 0; // 最长子串的长度
    let left = 0; // 滑动窗口左边界
    
    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            // 如果字符已经在哈希表中出现过，则更新左指针为相同字符上一次出现的索引位置的下一个位置
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right); // 更新字符的索引位置
        maxLength = Math.max(maxLength, right - left + 1); // 更新最长子串的长度
    }
    
    return maxLength;
};


console.log(lengthOfLongestSubstring("tmmzuxt"))
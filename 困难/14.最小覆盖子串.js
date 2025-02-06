const question = `
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：
对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。
`

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s === t) return s;
    if (s.length < t.length) return '';

    const mapT = new Map();

    for (const char of t) {
        mapT.set(char, (mapT.get(char) || 0) + 1);
    };

    let left = 0, right = 0;
    let matchCount = 0; //窗口 匹配的字符个数
    const windowMap = new Map();
    let minLength = Infinity;
    let start = 0; //最小子串起始点

    while(right < s.length) {
        //* 拓展窗口
        const chatRight = s[right];
        windowMap.set(chatRight, (windowMap.get(chatRight) || 0) + 1);
        //* 符合 t中的数量 增加匹配字符数量
        if (windowMap.get(chatRight) === mapT.get(chatRight)) {
            matchCount++;
        };

        //* 所有都满足， 缩小范围
        while(matchCount === mapT.size) {
            //* 更新最小窗口
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                start = left;
            };
            
            //* 缩小窗口
            const chatLeft = s[left];
            windowMap.set(chatLeft, windowMap.get(chatLeft) - 1);

            //* 移除字符串后 不再符合条件， 减少匹配数量
            if (windowMap.get(chatLeft) < mapT.get(chatLeft)) {
                matchCount--;
            };

            left++;
        }

        right++;
    };

    return minLength === Infinity ? '' : s.substring(start, start + minLength);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
console.log(minWindow('a', 'a'))
console.log(minWindow('a', 'aa'))
const question = `
给你一个字符串 s 和一个字符串数组 words ，请你判断 s 是否为 words 的 前缀字符串 。
字符串 s 要成为 words 的 前缀字符串 ，需要满足：s 可以由 words 中的前 k（k 为 正数 ）个字符串按顺序相连得到，且 k 不超过 words.length 。
如果 s 是 words 的 前缀字符串 ，返回 true ；否则，返回 false 。
`

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let prefix = '';


    for (let i = 0; i < words.length; i++) {
        const word = words[i],
            compareWord = prefix + word, 
            isPrefix = s.startsWith(compareWord);

        if (compareWord.length >= s.length) {
            return s.indexOf(compareWord) === 0
        }

        if (!isPrefix) return false;
        prefix+= words[i];
    }


    return s.length <= prefix.length && s.indexOf(prefix) === 0;
};


/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    
    let prefix = '';


    for (let i = 0; i < words.length; i++) {
        prefix += words[i];
        if (prefix.length >= s.length) {
            return prefix === s;
        }
    }

    return false;
};


/**
 * 双指针
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let i = 0;

    for(const word of words) {
        for(let j = 0; j < word.length; j++) {
            if (i >= s.length || s[i] !== word[j]) return false;
            i++;
        };
        if (i === s.length) return true;
    }

    return false;
};




// console.log(isPrefixString(
//     "iloveleetcode", ["i","love","leetcode","apples"]
// ))
// console.log(isPrefixString(
//     "iloveleetcode", ["apples","i","love","leetcode"]
// ))
console.log(isPrefixString(
    "ccccccccc", ["c","cc"]
))
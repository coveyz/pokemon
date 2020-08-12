const question = `给定一个字符串，逐个翻转字符串中的每个单词。`

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ').filter(item => item !== '').reverse().join(' ')
};
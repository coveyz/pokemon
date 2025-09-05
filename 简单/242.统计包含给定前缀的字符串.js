const question = `
给你一个字符串数组 words 和一个字符串 pref 。
返回 words 中以 pref 作为 前缀 的字符串的数目。
字符串 s 的 前缀 就是  s 的任一前导连续字符串。
`;

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
	let count = 0,
		prefLen = pref.length;
	for (let index = 0; index < words.length; index++) {
		const element = words[index].slice(0, prefLen);

		count = count + (element === pref ? 1 : 0);
	}

	return count;
};

// const words = ['pay', 'attention', 'practice', 'attend'],
// 	pref = 'at';

const words = ['leetcode', 'win', 'loops', 'success'],
	pref = 'code';

console.log(prefixCount(words, pref));

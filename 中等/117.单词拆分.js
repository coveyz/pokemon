const question = `
给你一个字符串 s 和一个字符串列表 wordDict 作为字典，判定 s 是否可以由空格拆分为一个或多个在字典中出现的单词。
说明：拆分时可以重复使用字典中的单词。
`;

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const len = s.length;
	const wordSet = new Set(wordDict);

	const canBreak = (start) => {
		if (start === len) return true;

		for (let index = 1; index <= len; index++) {
			const prex = s.slice(start, index); //* 前缀

			console.log(wordSet.has(prex), prex);
			if (wordSet.has(prex) && canBreak(index)) {
				return true;
			}
		}

		return false;
	};

	return canBreak(0);
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));

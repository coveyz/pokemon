const question = `
给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
`

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	const word2Ch = new Map(),
		ch2word = new Map(),
		words = s.split(' ');
	if (pattern.length !== words.length) return false;

	for (const [key, word] of words.entries()) {
		const ch = pattern[key];

		if ((word2Ch.has(word) && word2Ch.get(word) !== ch) || (ch2word.has(ch) && ch2word.get(ch) !== word)) {
			return false;
		}

		word2Ch.set(word, ch);
		ch2word.set(ch, word);
	}

	// return { word2Ch, ch2word };
	return true;
};

// let pattern = 'abba',str = 'dog cat cat dog';
let pattern = 'abba', str = 'dog cat cat fish';

console.log(wordPattern(pattern, str));

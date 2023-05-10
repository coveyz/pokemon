const question = `
DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。
例如，"ACGAATTCCG" 是一个 DNA序列 。
在研究 DNA 时，识别 DNA 中的重复序列非常有用。
给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。  
`;

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
	const result = new Set(),
		len = s.length,
		map = new Map();

	for (let index = 0; index < len; index++) {
		const tmp = s.substring(index, index + 10);

		if (tmp.length !== 10) break;

		if (map.has(tmp)) {
			result.add(tmp);
		} else {
			map.set(tmp, tmp);
		}
	}

	return [...result];
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'));

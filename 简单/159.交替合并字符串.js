const question = `
你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
返回 合并后的字符串 。
`;
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
	let res = '';
	const bigger = word1.length >= word2.length ? word1 : word2;

	for (let index = 0; index < bigger.length; index++) {
		if (word1[index]) {
			res += word1[index];
		}
		if (word2[index]) {
			res += word2[index];
		}
	}

	return res;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));

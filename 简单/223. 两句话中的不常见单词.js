const question = `
给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
返回所有不常用单词的列表。
您可以按任何顺序返回列表。
`;

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
	const sentences = A.split(' ').concat(B.split(' '));
	const obj = {};
	for (let index = 0; index < sentences.length; index++) {
		const element = sentences[index];
		obj[element] = (obj[element] || 0) + 1;
	}
	const arr = [];

	Object.keys(obj).forEach((key) => {
		if (obj[key] === 1) {
			arr.push(key);
		}
	});

	return arr;
};

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
console.log(uncommonFromSentences('apple apple', 'banana'));

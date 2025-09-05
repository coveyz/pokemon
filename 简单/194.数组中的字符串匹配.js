const quesiton = `
给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。
如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串
`;
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
	const arr = [];

	for (let index = 0; index < words.length; index++) {
		const element = words[index];
		for (let index = 0; index < words.length; index++) {
			const item = words[index];
			if (item.indexOf(element) > -1 && element !== item && arr.indexOf(element) === -1) {
				// console.log('item=>', item, 'element=>', element);
				arr.push(element);
			}
		}
	}

	return arr;
};

console.log(stringMatching(['mass', 'as', 'hero', 'superhero']));
console.log(stringMatching(['leetcode', 'et', 'code']));
console.log(stringMatching(['blue', 'green', 'bu']));
console.log(stringMatching(['leetcoder', 'leetcode', 'od', 'hamlet', 'am']));

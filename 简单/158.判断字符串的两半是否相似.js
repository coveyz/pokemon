const question = `
给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。
两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。注意，s 可能同时含有大写和小写字母。
如果 a 和 b 相似，返回 true ；否则，返回 false 。
`;
// const halvesAreAlike = (s) => {
// 	const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// 	const wordLength = s.length;
// 	let firstHalfWordNumberOfVowel = 0;
// 	let secondHalfWordNumberOfVowel = 0;

// 	for (let index = 0; index < s.length; index++) {
// 		const word = s[index];
// 		if (index + 1 <= wordLength / 2 && vowel.indexOf(word.toLowerCase()) > -1) {
// 			firstHalfWordNumberOfVowel += 1;
// 		} else if (index + 1 >= wordLength / 2 && vowel.indexOf(word.toLowerCase()) > -1) {
// 			secondHalfWordNumberOfVowel += 1;
// 		}
// 	}
// 	return firstHalfWordNumberOfVowel === secondHalfWordNumberOfVowel;
// };

/**
 *
 * @param {string} s
 * @returns {boolean}
 */
const halvesAreAlike = (s) => {
	const wordLength = s.length;
	const left = s.slice(0, wordLength / 2).replace(/[aeiou]/gi, '');
	const right = s.slice(wordLength / 2, wordLength).replace(/[aeiou]/gi, '');
	return left.length === right.length;
};

console.log(halvesAreAlike('book'));
console.log(halvesAreAlike('textbook'));
console.log(halvesAreAlike('MerryChristmas'));
console.log(halvesAreAlike('AbCdEfGh'));

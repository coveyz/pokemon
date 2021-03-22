const question = `
给定两个字符串 s 和 t，它们只包含小写字母。
字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母。
`

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

const findTheDifference = (s, t) => {
	var scode = 0;
	var tcode = 0;

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		scode += element.charCodeAt();
	}

	for (let index = 0; index < t.length; index++) {
		const item = t[index];
		tcode += item.charCodeAt();
	}
	return String.fromCharCode(tcode - scode);
};

console.log(findTheDifference('abcd', 'abcde'));
console.log(findTheDifference('', 'y'));
console.log(findTheDifference('a', 'aa'));
console.log(findTheDifference('ae', 'aea'));

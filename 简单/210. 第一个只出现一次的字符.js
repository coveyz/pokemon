const question = `
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
`;

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	if (!s.length) return ' ';
	const map = new Map(),
		delMap = new Map();
	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (delMap.has(element)) {
			continue;
		} else {
			if (map.has(element)) {
				delMap.set(element, true);
				map.delete(element);
			} else {
				map.set(element, true);
			}
		}
	}

	for (const [key, value] of map) {
		return key;
	}

	return ' ';
};

const s = 'abaccdeff';
console.log(firstUniqChar(s));

const question = `
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
`;

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	const container = {};
	const len = s.length;
	for (let index = 0; index < len; index++) {
		const element = s[index];

		if (container.hasOwnProperty(element)) {
			continue;
		} else {
			const pos = s.lastIndexOf(element);
			if (pos === index) {
				return index;
			} else {
				container[element] = true;
			}
		}
	}

	return -1;
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));

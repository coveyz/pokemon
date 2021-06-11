/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	if (s === '') return '';
	const obj = {};

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		obj[element] = (obj[element] || 0) + 1;
	}

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (obj[element] === 1) {
			return element;
		}
	}

	return -1;
};

console.log(firstUniqChar('abaccdeff'));

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	if (!s.length || !t.length) return !s.length ? t : s;

	const map = {};

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		map[element] = map[element] ? map[element] + 1 : 1;
	}

	for (let key = 0; key < t.length; key++) {
		const item = t[key];
		if (!map[item]) return item;
		const result = map[item] - 1;
		if (result < 0) return item;
    map[item] = map[item] -1
	}

	return '';
};

const s = 'abcd',t = 'abcde';
// const s = "", t = "y";
// const s = 'a',t = 'aa';

console.log(findTheDifference(s, t));

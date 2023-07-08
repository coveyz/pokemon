/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const map = new Map();

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		map.set(element, map.has(element) ? map.get(element) + 1 : 1);
	}

	for (let index = 0; index < t.length; index++) {
		const element = t[index];
		if (!map.has(element)) return false;

		map.set(element, map.get(element) - 1);

		if (map.get(element) < 0) return false;
	}

	return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));

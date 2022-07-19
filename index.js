/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	const m = t.length,
		n = s.length;
	let index = 0,
		key = 0;

	while (index < m && key < n) {
		if (s.charAt(key) === t.charAt(index)) {
			key++;
		}
		index++;
	}
	console.log('m', m, 'n', n, 'index', index, 'key=>', key);
	return key === n;
};

const s = 'abc',t = 'ahbgcd';
// const s = 'axc',t = 'ahbgdc';

console.log(isSubsequence(s, t));

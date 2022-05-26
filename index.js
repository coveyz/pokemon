/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
	const arr = s.split('');
	const start = arr.slice(0, k),
		end = arr.slice(k, arr.length);
	return end.concat(start).join('');
};

// const s = 'abcdefg',k = 2;
const s = 'lrloseumgh',
	k = 6;
console.log(reverseLeftWords(s, k));

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
	let start = '',
		end = '';

	for (let index = 0; index < s.length; index++) {
		const element = s[index];

		if (index < k) {
			end += element;
		} else {
			start += element;
		}
	}

	return start + end;
};

// const s = 'abcdefg',k = 2;
const s = "lrloseumgh", k = 6

console.log(reverseLeftWords(s, k));

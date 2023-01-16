/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	if (!s.length) return t;

	const map = {};
	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		map[element] = (map[element] || 0) + 1;
	}

  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    if (!map[element]) return element;
    map[element] -= 1;
  }

};

const s = 'abcd', t = 'abcde';

console.log(findTheDifference(s, t));

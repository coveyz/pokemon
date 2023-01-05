/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	if (s1.length !== s2.length) return false;
	if (s1 === s2) return true;

	const map = {},
		elementMap = {};

	for (let index = 0; index < s1.length; index++) {
		const element = s1[index];
		map[index] = element;
		elementMap[element] = (elementMap[element] || 0) + 1;
	}

	// return { map, elementMap };

	let diff = 0;

	for (let index = 0; index < s2.length; index++) {
		const element = s2[index];
		// elementMap
		if (!elementMap[element]) return false;
		elementMap[element] = elementMap[element] - 1;
		if (elementMap[element] < 0) return false;
		// map
		const mapCurItem = map[index];
		if (mapCurItem !== element) {
			diff++;
		}
		if (diff > 2) return false;
	}

	return true;
};

// console.log(areAlmostEqual('bank', 'kanb'));
// console.log(areAlmostEqual('attack', 'defend'));
// console.log(areAlmostEqual('kelb', 'kelb'));
// console.log(areAlmostEqual('abcd', 'dcba'));
console.log(areAlmostEqual('aa', 'ac'));
console.log(areAlmostEqual('yf', 'yy'));

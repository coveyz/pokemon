/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let result = map[s[0]];

	for (let index = 1; index < s.length; index++) {
		const element = map[s[index]],
			preElement = map[s[index - 1]];

		console.log({ preElement, element });

		if (element > preElement) {
			result += (element - preElement - preElement)
		} else {
			result += element;
		}
	}

	return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('IX'));

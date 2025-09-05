const quesiton = `
给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
`;

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
	let max = a.length >= b.length ? a : b,
		min = a.length >= b.length ? b : a;

	if (max.length !== min.length) {
		min = min.padStart(max.length, '0');
	}

	let result = '',
		pos = max.length - 1,
		flage = 0;

	while (pos >= 0) {
		console.log('min=>', min[pos]);
		let tmp = max[pos] * 1 + min[pos] * 1 + flage;
		flage = 0;
		if (tmp > 1) {
			//* 需要进位
			tmp = tmp === 2 ? 0 : 1;
			result = tmp + result;
			flage = 1;
		} else {
			result = tmp + result;
			flage = 0;
		}

		pos--;
	}

	if (flage) {
		result = flage + result;
	}

	return result;
};
console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));

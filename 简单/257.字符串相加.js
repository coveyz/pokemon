const question = `
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
`;

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
	let longStr = num1.length > num2.length ? num1 : num2,
		shortStr = num1.length > num2.length ? num2 : num1,
		res = [];
	flage = 0;
	let pos = longStr.length - 1;
	shortStr = shortStr.padStart(longStr.length, '0');

	while (pos >= 0) {
		let first = longStr[pos],
			second = shortStr[pos],
			sum = Number(first) + Number(second);

		if (flage === 1) {
			sum += flage;
			flage = 0;
		}

		if (sum >= 10) {
			flage = 1;
		}
		res.push(sum % 10);
		if (flage === 1 && pos === 0) {
			res.push(1);
		}
		console.log('count=<', res, 'first=>', first, 'second=>', second, 'sum=>', sum, 'flage=>', flage);
		pos -= 1;
	}

	return res.reverse().join('');
};

let num1 = '777',
	num2 = '223';

console.log(addStrings(num1, num2));

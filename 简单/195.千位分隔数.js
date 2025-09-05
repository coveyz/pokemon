const question = `
给你一个整数 n，请你每隔三位添加点（即 "." 符号）作为千位分隔符，并将结果以字符串格式返回。
`;
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	const numberStr = n.toString();
	if (n < 1000) return numberStr;

	const arr = [];
	let count = 0;
	for (let index = numberStr.length - 1; index >= 0; index--) {
		const element = numberStr[index];
		arr.unshift(element);
		if ((count + 1) % 3 === 0) {
			// console.log('cur', index + 1, (index + 1) % 3);
			arr.unshift('.');
		}
		count += 1;
	}
	if (arr[0] === '.') {
		arr.splice(0, 1);
	}
	return arr.join('');
};

console.log(thousandSeparator(987));
console.log(thousandSeparator(1234));
console.log(thousandSeparator(123456789));
console.log(thousandSeparator(0));

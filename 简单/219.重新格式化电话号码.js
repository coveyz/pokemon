const question = `
给你一个字符串形式的电话号码 number 。number 由数字、空格 ' '、和破折号 '-' 组成。

请你按下述方式重新格式化电话号码。

首先，删除 所有的空格和破折号。
其次，将数组从左到右 每 3 个一组 分块，直到 剩下 4 个或更少数字。剩下的数字将按下述规定再分块：
2 个数字：单个含 2 个数字的块。
3 个数字：单个含 3 个数字的块。
4 个数字：两个分别含 2 个数字的块。
最后用破折号将这些块连接起来。注意，重新格式化过程中 不应该 生成仅含 1 个数字的块，并且 最多 生成两个含 2 个数字的块。

返回格式化后的电话号码。
`;
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	let integration_phoneNumber = [];

	for (let index = 0; index < number.length; index++) {
		const element = number[index];
		if (element !== ' ' && element !== '-') {
			integration_phoneNumber.push(element);
		}
	}

	const phoneNumber = [];

	while (integration_phoneNumber.length > 4) {
		phoneNumber.push(integration_phoneNumber.splice(0, 3).join(''));
	}

	if (integration_phoneNumber.length === 4) {
		while (integration_phoneNumber.length) {
			phoneNumber.push(integration_phoneNumber.splice(0, 2).join(''));
		}
	} else {
		phoneNumber.push(integration_phoneNumber.join(''));
	}

	return phoneNumber.join('-');
};

console.log(reformatNumber('1-23-45 6'));
console.log(reformatNumber('123 4-567'));
console.log(reformatNumber('12'));
console.log(reformatNumber('--17-5 229 35-39475 '));

const question = `
给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
`;

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	let strStack = [],
		numStack = [],
		res = '',
		num = 0;

	for (const str of s) {
		const isNumber = !isNaN(str);

		if (isNumber) {
			num = num * 10 + Number(str);
		} else if (str === '[') {
			strStack.push(res);
			numStack.push(num);
			res = '';
			num = 0;
		} else if (str === ']') {
			console.log('element==>');
			console.log('strStack=>', strStack);
			console.log('numStack=>', numStack);
			console.log('before-res=>', res);
			res = strStack.pop() + res.repeat(numStack.pop());
			console.log('after-res=>', res);
		} else {
			res += str;
		}
	}

	return res;
};

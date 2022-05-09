const question = `
给你一个由 '('、')' 和小写字母组成的字符串 s。
你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。
请返回任意一个合法字符串。
有效「括号字符串」应当符合以下 任意一条 要求：
空字符串或只包含小写字母的字符串
可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」
`;

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
	const stack = [];
	let arr = [];

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (element === '(') {
			stack.push(arr.length);
		} else if (element === ')') {
			if (stack.length) {
				const item = stack.pop();
				arr.splice(item, 0, '(');
				arr.push(element);
			}
		} else {
			arr.push(element);
		}
	}

	return arr.join('');
};

// let s = 'lee(t(c)o)de)';
// let s = 'a)b(c)d';
let s = '))((';

console.log(minRemoveToMakeValid(s));

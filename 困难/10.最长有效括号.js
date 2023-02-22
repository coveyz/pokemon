const question = `
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
`

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	if (!s.length) return 0;
	const stack = [-1];
	let result = 0;

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		if (element === '(') {
			stack.push(index);
		} else if (element === ')') {
			console.log('index=x>', index, 'stack=x>', stack);
			stack.pop();
			if (!stack.length) {
				stack.push(index);
			} else {
				result = Math.max(result, index - stack[stack.length - 1]);
			}
			console.log('index=>', index, 'stack=>', stack, result);
		}
	}

	return result;
};

// console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses('())((())'));
// console.log(longestValidParentheses(')()())'));
// console.log(longestValidParentheses(''));
// console.log(longestValidParentheses('()(()'));

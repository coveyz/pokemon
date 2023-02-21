const question = `
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
`;
var isValid = function (s) {
	let map = {
		'(': -1,
		')': 1,
		'[': -2,
		']': 2,
		'{': -3,
		'}': 3,
	};
	let stack = [];
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] < 0) {
			stack.push(s[i]);
		} else {
			let last = stack.pop();
			if (map[last] + map[s[i]] != 0) return false;
		}
	}
	if (stack.length > 0) return false;
	return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function (s) {
	const limitMap = { '(': 1, '{': 2, '[': 3, ')': -1, '}': -2, ']': -3 },
		stack = [];

	for (let index = 0; index < s.length; index++) {
		const element = s[index],
			target = limitMap[element];

		if (target > 0) {
			// console.log('yes', element);
			stack.push(target);
		} else {
			if (!stack.length) return false;
			const item = stack.pop();
			// console.log('stack=>', stack, 'item=>', item, 'element=>', target);
			if (item + target !== 0) return false;
		}
	}

	return true;
};

console.log(isValid('()[]{}'));
console.log(isValid('(]'));


console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));

const question = `
给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。
请你计算该表达式。返回一个表示表达式值的整数。
注意：
有效的算符为 '+'、'-'、'*' 和 '/' 。
每个操作数（运算对象）都可以是一个整数或者另一个表达式。
两个整数之间的除法总是 向零截断 。
表达式中不含除零运算。
输入是一个根据逆波兰表示法表示的算术表达式。
答案及所有中间计算结果可以用 32 位 整数表示。
`

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const stack = [],
		symbolGroup = ['+', '-', '*', '/'];

	const magic = (sym) => {
		const secondItem = stack.pop(),
			fistItem = stack.pop();
		let result = null;

		switch (sym) {
			case '+':
				result = fistItem + secondItem;
				break;
			case '-':
				result = fistItem - secondItem;
				break;
			case '*':
				result = fistItem * secondItem;
				break;
			case '/':
				const tmp = fistItem / secondItem > 0 ? Math.floor(fistItem / secondItem) : Math.ceil(fistItem / secondItem);
				result = tmp;
				break;
		}

		// console.log('item=>', { fistItem, secondItem }, 'result=>', result, 'sym=>', sym);
		stack.push(result);
	};

	for (let index = 0; index < tokens.length; index++) {
		const elemet = tokens[index];
		if (!symbolGroup.includes(elemet)) {
			stack.push(+elemet);
		} else {
			magic(elemet);
		}
	}

	// console.log('stack=>', stack);
	return stack[0];
};

// console.log(evalRPN(['2', '1', '+', '3', '*']));
// console.log(evalRPN(['4', '13', '5', '/', '+']));
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']));

const question = `
输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如，序列 {1,2,3,4,5} 是某栈的压栈序列，序列 {4,5,3,2,1} 是该压栈序列对应的一个弹出序列，但 {4,3,5,1,2} 就不可能是该压栈序列的弹出序列。
`;

//* 1.0 如果 栈顶 = pop当前位置的值
//* 1.1 stack pop()

//* 2.0 如果按照 poped 的规则，stack 能清空，就是true

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	const m = pushed.length,
		stack = [];
	let j = 0;

	for (let index = 0; index < m; index++) {
		stack.push(pushed[index]);
		while (stack.length && stack[stack.length - 1] === popped[j]) {
			stack.pop();
			j++;
		}
	}

	return !stack.length;
};

const pushed = [1, 2, 3, 4, 5],
	popped = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushed, popped));

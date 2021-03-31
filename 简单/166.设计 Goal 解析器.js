const question = `
请你设计一个可以解释字符串 command 的 Goal 解析器 。command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。然后，按原顺序将经解释得到的字符串连接成一个字符串。
给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。
`;

const interpret = (command) => {
	let str = '';
	for (let index = 0; index < command.length; index++) {
		const element = command[index];
		if (element === '(' && command[index + 1] === ')') {
			str += 'o';
		} else if (element !== '(' && element !== ')') {
			str += element;
		}
	}

	return str;
};

console.log(interpret('G()(al)'));
console.log(interpret('G()()()()(al)'));
console.log(interpret('(al)G(al)()()G'));

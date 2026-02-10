const question = `有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，
+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。`;

const removeOuterParentheses = (S) => {
	let res = '';
	let group = '';
	let stack = [];
	for (let index = 0; index < S.length; index++) {
		const ele = S[index];
		if (ele === '(') {
			stack = [...stack, ele];
		} else {
			stack.pop(ele);
		}
		group += ele;
		if (!stack.length) {
			res += group.substring(1, group.length - 1);
			group = '';
		}
	}
	return res;
};


/**
 * @description 计数法
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses1 = function(s) {
    let result = '', 
        level = 0;

    for (let char of s) {
        if (char === '(') {
            if (level > 0) {
                result+= char;
            }
            level++;
        } else {
            level--;
            if (level > 0) {
                result+= char
            }
        }
    };

    return result;
};

console.log(removeOuterParentheses('(()())(())'));

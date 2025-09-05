const question = `
给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。
如果相等，返回 true ；否则，返回 false 。
注意：如果对空文本输入退格字符，文本继续为空。
`;

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//* 栈
var backspaceCompareOfStack = function (s, t) {
	const magic = (arr) => {
		const container = [];

		for (let index = 0; index < arr.length; index++) {
			const item = arr[index];
			if (item === '#' && item.length) {
				container.pop();
			} else {
				container.push(item);
			}
		}

		return container.join('');
	};

	return magic(s) === magic(t);
};

//* 双指针
const backspaceCompare = (s, t) => {
	let index = s.length - 1,
		key = t.length - 1,
		skipS = 0,
		skipT = 0;

	while (index >= 0 || key >= 0) {
		//* S循环
		while (index >= 0) {
			if (s[index] === '#') {
				skipS += 1;
				index -= 1;
			} else if (skipS > 0) {
				skipS -= 1;
				index -= 1;
			} else {
				break;
			}
		}
		//* T循环
		while (key >= 0) {
			if (t[key] === '#') {
				skipT += 1;
				key -= 1;
			} else if (skipT > 0) {
				skipT -= 1;
				key -= 1;
			} else {
				break;
			}
		}
		if (s[index] !== t[key]) return false;
		index -= 1;
		key -= 1;
	}

	return true;
};

console.log(backspaceCompare('ab#c', 'c#d#'));
console.log(backspaceCompare('ab##', 'c#d#'));

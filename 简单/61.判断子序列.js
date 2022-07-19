const question = `给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。`;

const isSubsequence = (s, t) => {
	if (s === '') return true;
	const sStack = s.split('');
	const tStack = t.split('');
	while (tStack.length > 0) {
		let tlastItem = tStack.pop(); // tStack最后 一项目
		if (tlastItem === sStack[sStack.length - 1]) {
			sStack.pop();
			if (sStack.length === 0) return true;
		}
	}
	return false;
};

/**
 ** 双指针
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence2 = function (s, t) {
	const m = t.length,
		n = s.length;
	let index = 0,
		key = 0;

	while (index < m && key < n) {
		if (s.charAt(key) === t.charAt(index)) {
			key++;
		}
		index++;
	}
	// console.log('m', m, 'n', n, 'index', index, 'key=>', key);
	return key === n;
};

console.log(isSubsequence('abc', 'ahbgdc'));

const question = `
给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。
如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。
`;

const areAlmostEqual = (s1, s2) => {
	if (s1 === s2) {
		return true;
	}
	let flag = true;
	let number = 0;

	for (let index = 0; index < s2.length; index++) {
		const element = s2[index];
		const item = s1[index];
		//* s2某值 s1 根本没有
		if (s1.indexOf(element) === -1 || s2.indexOf(item) === -1) {
			return false;
		}
		//* s2某值 在 s1 位置不对 -> 标记 + 1
		else if (number < 2 && element !== item) {
			number += 1;
		}
		//*  s2某值 在 s1 位置不对 标记为2 -> return false
		else if (number >= 2 && element !== item) {
			return false;
		}
	}

	return flag;
};

console.log(areAlmostEqual('bank', 'kanb'));
console.log(areAlmostEqual('attack', 'defend'));
console.log(areAlmostEqual('kelb', 'kelb'));
console.log(areAlmostEqual('abcd', 'dcba'));
console.log(areAlmostEqual('yf', 'yy'));

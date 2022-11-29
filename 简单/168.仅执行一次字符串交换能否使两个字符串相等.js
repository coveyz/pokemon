const question = `
给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。
如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。
`;

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 const areAlmostEqual = (s1, s2) => {
	if (s1 === s2) {
		return true;
	}

	const diff = [];

	for (let index = 0; index < s1.length; index++) {
		if (s1[index] !== s2[index]) {
			if (diff.length >= 2) {
				return false;
			}
			diff.push(index);
		}
	}

	if (!diff.length) return true;
	else if (diff.length !== 2) return false;

	return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};


console.log(areAlmostEqual('bank', 'kanb'));
console.log(areAlmostEqual('attack', 'defend'));
console.log(areAlmostEqual('kelb', 'kelb'));
console.log(areAlmostEqual('abcd', 'dcba'));
console.log(areAlmostEqual('yf', 'yy'));


// const s1 = 'bank',s2 = 'kanb';
// const s1 = "attack", s2 = "defend"
// const s1 = "siyolsdcjthwsiplccjbuceoxmpjgrauocx",s2 = "siyolsdcjthwsiplccpbuceoxmjjgrauocx"
const s1 = 'abca',s2 = 'abcc';

console.log(areAlmostEqual(s1, s2));
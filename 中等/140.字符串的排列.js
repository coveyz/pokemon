const question = `
给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
换句话说，s1 的排列之一是 s2 的 子串 。
`;

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	const n = s1.length;
	m = s2.length;
	if (n > m) return false;
	const cnt1 = new Array(26).fill(0);
	const cnt2 = new Array(26).fill(0);

	for (let index = 0; index < n; index++) {
		++cnt1[s1[index].charCodeAt() - 'a'.charCodeAt()];
		++cnt2[s2[index].charCodeAt() - 'a'.charCodeAt()];
	}

	if (cnt1.toString() === cnt2.toString()) return true;

	for (let index = n; index < m; index++) {
		++cnt2[s2[index].charCodeAt() - 'a'.charCodeAt()];
		--cnt2[s2[index - n].charCodeAt() - 'a'.charCodeAt()];
		// console.log({ cnt1, cnt2 });
		if (cnt1.toString() === cnt2.toString()) return true;
	}

	return false;
};

let s1 = 'ab',
	s2 = 'eidbaooo';

console.log(checkInclusion(s1, s2));

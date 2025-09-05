const question = `
给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
`;

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
	const len = s.length;
	let res = '';

	for (let index = 0; index < len - 1; index++) {
		res += s[index];
		// repeat-> "qwe".repeat(2) -> qweqwe
		if (s === res.repeat(Math.floor(len / res.length))) {
			return true;
		}
	}

	return false;
};

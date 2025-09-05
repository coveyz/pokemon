const question = `
给定两个字符串 s 和 t ，判断它们是否是同构的。
如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
`;

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	const sMap = {},
		tMap = {},
		len = s.length;

	for (let index = 0; index < len; index++) {
		const x = s[index],
			y = t[index];

		if ((sMap[x] && sMap[x] !== y) || (tMap[y] && tMap[y] !== x)) {
			return false;
		}

		sMap[x] = y;
		tMap[y] = x;
	}

	// return { s, t };
	return true;
};

// const s = 'egg',t = 'add';
const s = 'foo',
	t = 'bar';

console.log(isIsomorphic(s, t));

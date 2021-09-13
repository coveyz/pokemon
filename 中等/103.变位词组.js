const question = `
给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。
注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。
`;

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const obj = strs.reduce((acc, cur) => {
		const dic = [];
		for (let index = 0; index < cur.length; index++) {
			const element = cur[index];
			dic.push(element);
		}
		const target = dic.sort().join('');

		if (acc[target]) {
			acc[target] = [...acc[target], cur];
		} else {
			acc[target] = [cur];
		}

		return acc;
	}, {});

	const contain = [];

	Object.keys(obj).forEach((key) => {
		contain.push(obj[key]);
	});

	return contain;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));

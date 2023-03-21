const question = `
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。
`

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const map = new Map();

	const magic = (str) => {
		return str.split('').sort().join('');
	};

	for (let index = 0; index < strs.length; index++) {
		const element = strs[index],
			tmp = magic(element);

		if (map.has(tmp)) {
			const arr = map.get(tmp);
			arr.push(element);
		} else {
			map.set(tmp, [element]);
		}
	}

	return [...map.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['']));
console.log(groupAnagrams(['a']));

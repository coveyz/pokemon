const question = `编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。`;

const thinking = `
标签：链表
当字符串数组长度为 0 时则公共前缀为空，直接返回
令最长公共前缀 ans 的值为第一个字符串，进行初始化
遍历后面的字符串，依次将其与 ans 进行比较，两两找出公共前缀，最终结果即为最长公共前缀
如果查找过程中出现了 ans 为空的情况，则公共前缀不存在直接返回
时间复杂度：O(s)O(s)，s 为所有字符串的长度之和
`;

const longestCommonPrefix1 = (strs) => {
	if (!strs.length) return '';
	let ans = strs[0];
	for (let i = 1; i < strs.length; i++) {
		let j = 0;
		for (; j < ans.length && j < strs[i].length; j++) {
			if (ans[j] !== strs[i][j]) {
				break;
			}
		}
		ans = ans.substr(0, j);
		if (ans === '') return ans;
	}
	return ans;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let ret = '';

	if (!strs.length) return ret;

	for (let index = 0; index < strs[0].length; index++) {
		const element = strs[0][index];
		// console.log('element=>',element);
		for (let key = 1; key < strs.length; key++) {
			const item = strs[key][index];
			if (element !== item) return ret;
			// console.log('item=>', item);
		}
		ret += element;
	}

	return ret;
};

console.log(longestCommonPrefix(['abca', 'abc']));

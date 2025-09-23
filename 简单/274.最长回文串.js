const question = `
给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的 回文串 的长度。
在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
`

//? 思路
//? 1. 使用哈希表统计每个字符出现的次数
//? 2. 遍历每个字符出现的次数count
//?   1. 对每个 count成对使用 向下取证 * 2
//?   2. 如果 count是奇数，记录 odd = true
//? 3. 最后如果 odd为true，结果 + 1


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const map = {};
	let odd = false,
		ans = 0;

	for (const key of s) {
		if (map[key]) {
			map[key] += 1;
		} else {
			map[key] = 1;
		}
	}

	for (const key in map) {
		if (map[key] % 2 === 0) {
			ans += map[key];
		} else {
			odd = true;
			ans += map[key] - 1;
		}
	}

	if (odd) ans++;

	return ans;
};

const s = 'abccccdd';

console.log(longestPalindrome(s));

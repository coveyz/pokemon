const question = `
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
`

var longestCommonSubsequence = function (text1, text2) {
	const m = text1.length,
		n = text2.length;
	const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

	for (let index = 1; index <= m; index++) {
		const element = text1[index - 1];
		console.log('element=?', element);

		for (let key = 1; key <= n; key++) {
			const item = text2[key - 1];

			if (element === item) {
				dp[index][key] = dp[index - 1][key - 1] + 1;
			} else {
				dp[index][key] = Math.max(dp[index - 1][key], dp[index][key - 1]);
			}
		}
	}

	return dp[m][n];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
console.log(longestCommonSubsequence('abc', 'abc'));
console.log(longestCommonSubsequence('abc', 'def'));

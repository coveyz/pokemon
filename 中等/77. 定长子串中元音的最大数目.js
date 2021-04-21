const question = `
给你字符串 s 和整数 k 。
请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。
英文中的 元音字母 为（a, e, i, o, u）。
`;
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const maxVowels = (s, k) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0,
		left = 0,
		right = 0;

	while (right < k) {
		count = vowels.includes(s[right]) ? count + 1 : count;
		right += 1;
	}

	let max = count;

	while (right < s.length) {
		count = vowels.includes(s[left]) ? count - 1 : count;
		count = vowels.includes(s[right]) ? count + 1 : count;

		left += 1;
		right += 1;
		max = Math.max(max, count);
	}

	return max;
};

console.log(maxVowels('abciiidef', 3));
console.log(maxVowels('aeiou', 2));
console.log(maxVowels('leetcode', 3));
console.log(maxVowels('rhythms', 4));
console.log(maxVowels('tryhard', 4));

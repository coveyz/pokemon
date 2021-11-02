const question = `
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
`;

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let target = {};
	let window = {};

	for (const key of p) {
		target[key] = (target[key] || 0) + 1;
	}

	let left = 0,
		right = 0,
		valid = 0,
		container = [];

	while (right < s.length) {
		let item = s[right];
		right += 1;

		if (target[item]) {
			//* 如果当前字符串在 target中 更新当前窗口的统计
			window[item] = (window[item] || 0) + 1;
			//* 如果当前的窗口 和需要的字符串匹配时 验证数量+ 1
			if (window[item] === target[item]) {
				valid += 1;
			}
		}

		while (right - left >= p.length) {
			//* 如果验证数 和 target的key长度一样
			if (valid === Object.keys(target).length) {
				container.push(left);
			}
			//* 即将移除的字符串
			let element = s[left];
			left += 1;
			//* 左窗口
			if (target[element]) {
				if (window[element] === target[element]) {
					valid -= 1;
				}
				window[element] -= 1;
			}
		}
	}

	return container;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));

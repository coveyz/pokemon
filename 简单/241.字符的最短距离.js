const question = `
给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。
`;

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
	//* c 出现的位置
	const sArr = s.split('');
	const pos = sArr.reduce((acc, cur, index) => {
		if (cur === c) acc.push(index);
		return acc;
	}, []);

	const abs = (cur, posArr) => {
		let minNumber = Number.MAX_SAFE_INTEGER;
		for (let index = 0; index < posArr.length; index++) {
			const ret = Math.abs(cur - posArr[index]);
			minNumber = Math.min(minNumber, ret);
		}
		return minNumber;
	};

	return sArr.reduce((acc, cur, index) => {
		if (cur === c) {
			acc.push(0);
		} else {
			acc.push(abs(index, pos));
		}

		return acc;
	}, []);
};

console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaab', 'b'));

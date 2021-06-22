const question = `
输入一个字符串，打印出该字符串中字符的所有排列。
你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
`;
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
	const arr = s.split('').sort();
	const res = [];

	const backTrack = (track, store) => {
		if (store.length === 0) {
			res.push(track.join(''));
			return;
		}
		for (let index = 0; index < store.length; index++) {
			const element = store[index];
			if (store[index - 1] === element) continue;
			track.push(element);
			backTrack(
				track,
				store.filter((_, idx) => idx !== index)
			);

			track.pop();
		}
	};

	backTrack([], arr);

	return res;
};

console.log(permutation('abc'));

const question = `
给你两个字符串 s 和 t 。在一步操作中，你可以给 s 或者 t 追加 任一字符 。
返回使 s 和 t 互为 字母异位词 所需的最少步骤数。
字母异位词 指字母相同但是顺序不同（或者相同）的字符串。
`;

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
	const sbox = new Array(26).fill(0);
	const tbox = new Array(26).fill(0);

	const box = (target, arr) => {
		for (const cur of target) {
			arr[cur.charCodeAt() - 'a'.charCodeAt()]++;
		}
	};

	box(s, sbox);
	box(t, tbox);

	let sum = 0;

	for (let i = 0; i < 26; i++) {
		sum += Math.abs(tbox[i] - sbox[i]);
	}

	return sum;
};

const t = 'leetcode',
	s = 'coats';
// const s = 'night',
// 	t = 'thing';
console.log(minSteps(s, t));

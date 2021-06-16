const question = `有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。`;

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
	const arr = S.split('').sort();
	const res = [];

	const brackTrack = (track, store) => {
		if (store.length === 0) {
			res.push(track.join(''));
			return;
		}
		for (let index = 0; index < store.length; index++) {
			const element = store[index];
			if (store[index - 1] === element) continue;
			track.push(element);
			brackTrack(
				track,
				store.filter((_, idx) => idx !== index)
			);
			track.pop();
		}
	};

	brackTrack([], arr);

	return res;
};

console.log(permutation('qqe'));
console.log(permutation('Frx'));
console.log(permutation('ab'));

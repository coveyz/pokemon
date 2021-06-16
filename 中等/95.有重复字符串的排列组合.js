const question = `有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。`;

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
	const arr = S.split('').sort();
	const res = [];

	//* 使用两个集合  1-已经遍历的 2-未遍历的
	//* 未遍历为空的时候 返回
	const brackTrack = (track, store) => {
		if (store.length === 0) {
			res.push(track.join(''));
			return;
		}
		//* 1.0 只需要遍历未遍历的集合
		for (let index = 0; index < store.length; index++) {
			const element = store[index];
			//* 2.0 如果当前元素 和上一个元素一样 直接跳过
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

// console.log(permutation('qqe'));
console.log(permutation('Frx'));
// console.log(permutation('ab'));

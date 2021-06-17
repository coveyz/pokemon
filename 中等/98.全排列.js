const question = `
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。`;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const arr = nums.sort();
	const res = [];

	const brackTrack = (track, store) => {
		if (store.length === 0) {
			res.push([...track]);
			return;
		}

		for (let index = 0; index < store.length; index++) {
			const element = store[index];
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

console.log(permute([1, 2, 3]));

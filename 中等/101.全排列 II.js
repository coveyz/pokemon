const question = `
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
`;
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	const obj = {};
	// const arr = nums.sort();
	const res = [];

	const brackTrack = (track, store) => {
		if (store.length === 0) {
			if (!obj[track]) {
				res.push([...track]);
				obj[track] = (obj[track] || 0) + 1;
			}
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

	brackTrack([], nums);

	return res;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));

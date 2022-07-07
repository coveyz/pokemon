/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const map = nums.reduce((acc, cur) => {
		acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;
		return acc;
	}, {});

	for (const key in map) {
		if (map[key] === 1) return key;
	}
};

// const nums = [2, 2, 1];
const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));

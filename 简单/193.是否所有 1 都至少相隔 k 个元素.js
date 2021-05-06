const question = `
给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True ；否则，返回 False 。
`;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
	let number = 0; //* 1-> 出现的个数
	const arr = [];
	let zion = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (number === 0 && element === 1) {
			number += 1;
		} else if (number > 0) {
			if (element !== 1) {
				zion = [...zion, element];
			} else if (element === 1) {
				if (zion.length >= k) {
					arr.push(zion);
					zion = [];
				} else {
					return false;
				}
			}
		}
	}

	return true;
};

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 1, 1, 1, 1], 0));
console.log(kLengthApart([0, 1, 0, 1], 1));

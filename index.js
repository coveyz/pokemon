/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const index = Math.floor(nums.length / 2);
	return nums.sort((a, b) => a - b)[index];
};

let nums = [3, 2, 3];
// let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

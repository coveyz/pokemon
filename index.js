/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let number = 0;

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];

		if (element === target) {
			number += 1;
		} else if (element > target) {
			break;
		}

		console.log(element);
	}

	return number;
};

const nums = [5, 7, 7, 8, 8, 10],
	target = 8;

console.log(search(nums, target));

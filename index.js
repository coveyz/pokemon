/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	const odd_arr = [],
		even_arr = [];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];

		if (element % 2) {
			odd_arr.push(element);
		} else {
			even_arr.push(element);
		}
	}

	return odd_arr.concat(even_arr);
};

const nums = [1, 2, 3, 4];

console.log(exchange(nums));

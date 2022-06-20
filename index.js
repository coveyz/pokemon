/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const map = new Map();

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index],
			need_item = target - element;
		console.log(map.has(need_item), element, need_item);
		if (map.has(element)) {
			return [element, map.get(element)];
		} else {
			map.set(need_item, element);
		}
	}

	return map;
};

// const nums = [2, 7, 11, 15],
// 	target = 9;

const nums = [10, 26, 30, 31, 47, 60],
	target = 40;

console.log(twoSum(nums, target));

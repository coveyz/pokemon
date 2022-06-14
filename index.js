/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
	const map = {},
		delMap = {};

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (delMap[element]) {
			break;
		} else if (!map[element]) {
			console.log('map=>', map, 'element->', element);
			map[element] = element;
		} else {
			delMap[element] = true;
			delete map[element];
		}
	}

	return Object.values(map);
};

const nums = [1, 2, 10, 4, 1, 4, 3, 3];

console.log(singleNumbers(nums));

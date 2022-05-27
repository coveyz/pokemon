/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
	const map = new Map();

	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		let leftItem = nums[left],
			rightItem = nums[right];
		// console.log(map);
		if (map.has(leftItem)) {
			// console.log('left=>', leftItem);
			return map.get(leftItem);
		}
		if (map.has(rightItem)) {
			// console.log('right', rightItem);
			return map.get(rightItem);
		}
		if (leftItem === rightItem) return leftItem;
		map.set(leftItem, leftItem);
		map.set(rightItem, rightItem);
		left++;
		right--;
	}
};

const nums = [2, 3, 1, 0, 2, 5, 3];
// const nums = [3, 4, 2, 0, 0, 1];

console.log(findRepeatNumber(nums));

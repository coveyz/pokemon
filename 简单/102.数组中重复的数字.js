const question = `在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。`;

const findRepeatNumber = (nums) => {
	const res = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (res.includes(element)) {
			return element;
		} else {
			res.push(element);
		}
	}
};

/**
 ** 哈希表 + 双指针
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber2 = function (nums) {
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

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));

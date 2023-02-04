const question = `
给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。
数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。
`;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
	const max = Math.max(...nums),
		result = [];

	const magic = (cur, index) => {
		if (cur === max) return -1;
		const len = nums.length;

		for (let key = index + 1; key < len * 2; key++) {
			const item = nums[key % len];
			if (item > cur) {
				return item;
			}
		}
	};

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		result[index] = magic(element, index);
	}

	return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements2 = function (nums) {
	const len = nums.length,
		result = new Array(len).fill(-1),
		stack = [];

	for (let index = 0; index < len * 2 - 1; index++) {
		console.log('index=>', index, index % len);

		while (stack.length && nums[stack[stack.length - 1]] < nums[index % len]) {
			result[stack[stack.length - 1]] = nums[index % len];
			stack.pop();
		}

		stack.push(index % len);
	}

	return result;
};

// console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 2, 3, 4, 3]));

const question = `给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。`;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let len = nums.length;
	let arr = new Array(len);
	let left = 0,
		right = len - 1,
		pos = len - 1;

	while (left <= right) {
		let leftSq = nums[left] * nums[left];
		let rightSq = nums[right] * nums[right];

		if (leftSq > rightSq) {
			arr[pos] = leftSq;
			left += 1;
		} else {
			arr[pos] = rightSq;
			right -= 1;
		}

		pos -= 1;
	}

	return arr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));

const question = `
输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
`;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	return nums.sort((a, b) => {
		return (b % 2) - (a % 2);
	});
};

/**
 ** 双数组
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

/**
 ** 双指针
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	let left = 0,
		right = nums.length - 1;

	while (left < right) {
		//* 调整指针
		while (left < right && nums[left] % 2 === 1) left++;
		while (left < right && nums[right] % 2 === 0) right--;

		[nums[left], nums[right]] = [nums[right], nums[left]];
	}

	return nums;
};

console.log(exchange([1, 2, 3, 4]));

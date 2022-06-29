const question = `
给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
`;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const len = nums.length;
	k = k % len;

	if (k === 0) return nums;

	let end = nums.slice(len - k),
		start = nums.slice(0, len - k);
	const arr = end.concat(start);

	// return { start, end, k };

	for (const key in nums) {
		nums[key] = arr[key];
	}

	return nums;
};

/**
 ** 双指针
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
	const len = nums.length;
	k = k % len;

	if (k === 0) return nums;

	const rotateArr = (arr, start, end) => {
		while (start < end) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
		}
		return arr;
	};
	rotateArr(nums, 0, len - 1); //* 全部反转
	rotateArr(nums, 0, k - 1); //* 前半部分反转
	rotateArr(nums, k, nums.length - 1); //* 后半部分反转

	return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7],
	k = 3;
// let nums = [-1, -100, 3, 99],k = 2;
// let nums = [1, 2],k = 0;
// let nums = [1, 2, 3, 4, 5, 6],k = 1;

console.log(rotate(nums, k));

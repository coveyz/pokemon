const question = `
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
必须在不使用库内置的 sort 函数的情况下解决这个问题。
`;

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	const swap = (nums, left, right) => {
		[nums[left], nums[right]] = [nums[right], nums[left]];
	};

	const len = nums.length;
	let left = 0,
		right = len - 1,
		pos = 0;

	while (pos <= right) {
		if (nums[pos] === 0) {
			swap(nums, left++, pos++);
		} else if (nums[pos] === 1) {
			pos++;
		} else {
			swap(nums, pos, right--);
		}
	}

	return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));

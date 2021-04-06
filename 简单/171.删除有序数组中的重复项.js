const question = `
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	const len = nums.length;
	if (len <= 1) {
		return len;
	}
	let slow = 1,
		fast = 1;

	while (fast < len) {
		if (nums[slow - 1] !== nums[fast]) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}

	return slow;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

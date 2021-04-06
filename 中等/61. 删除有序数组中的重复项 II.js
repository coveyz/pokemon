const question = `
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
说明：
为什么返回数值是整数，但输出的答案是数组呢？
请注意，输入数组是以「引用」方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
你可以想象内部操作如下:
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	for (let index = 0; index < nums.length; index++) {
		let element = nums[index];
		let last = nums.lastIndexOf(element);
		let cha = last - index;
		// console.log(element, cha);
		if (cha > 1) {
			nums.splice(index + 1, cha, element);
		}
	}

	return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));

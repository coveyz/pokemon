const question = `定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
说明:
返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。`;

const twoSum = (nums, target) => {
	const res = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		for (let idx = index + 1; idx < nums.length; idx++) {
			const item = nums[idx];
			const needItem = target - element;
			if (item === needItem) {
				res.push(index + 1, idx + 1);
				break;
			}
		}
	}
	return res;
};

console.log(twoSum([2, 7, 11, 15], 9));

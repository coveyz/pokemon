const question = `
给你一个整数数组 nums ，请计算数组的 中心下标 。
数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	const total = nums.reduce((acc, cur) => acc + cur, 0);
	let sum = 0;

	//* 左侧元素和： sum；
	//* 右侧元素和 = 右侧元素和： sum = total - curItem - sum
	//* 2sum + curItem = total

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (2 * sum + element === total) return index;
		sum += element;
	}

	return -1;
};

const nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));

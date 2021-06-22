const question = `
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
`;
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	//* 1
	if (nums.length === 1) {
		return nums[0];
	}
	//* 2
	else if (nums.length === 2) {
		return Math.max(...nums);
	}
	//* > 2
	else {
		return Math.max(robRang(nums, 0, nums.length - 2), robRang(nums, 1, nums.length - 1));
	}
};

const robRang = (arr, start, end) => {
	let first = arr[start],
		second = Math.max(arr[start], arr[start + 1]);
	for (let index = start + 2; index <= end; index++) {
		const element = arr[index];
		const tmp = second;
		second = Math.max(first + element, second);
		first = tmp;
	}
	return second;
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 3, 1, 3, 100]));

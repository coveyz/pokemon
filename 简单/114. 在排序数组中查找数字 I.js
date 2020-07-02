const question = `统计一个数字在排序数组中出现的次数。`;

const search = (nums, target) => {
	const numsIndexObj = nums.reduce((acc, cur) => {
		if (acc[cur]) {
			acc[cur] += 1;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {});

	return numsIndexObj[target] ? numsIndexObj[target] : 0
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 7, 8, 8, 10], 6));

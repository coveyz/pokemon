const question = `
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const obj = nums.reduce((acc, cur) => {
		acc[cur] = (acc[cur] || 0) + 1;
		return acc;
	}, {});

	let single;
	Object.keys(obj).forEach((key) => {
		if (obj[key] === 1) {
			single = key;
		}
	});

	return single;
};

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));

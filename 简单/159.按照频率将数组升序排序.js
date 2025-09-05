const question = `
给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。 
请你返回排序后的数组
`;
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
	const frequencyObj = nums.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		return acc;
	}, {});
	return nums.sort((a, b) => {
		if (frequencyObj[a] === frequencyObj[b]) {
			return b - a;
		} else {
			return frequencyObj[a] - frequencyObj[b];
		}
	});
};

console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([1, 1, 2, 2, 2, 3]));

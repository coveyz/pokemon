const question = `给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：
你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？`;

/**
 ** 位运算
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	return nums.reduce((acc, cur) => acc ^ cur);
};

/**
 ** 哈希表
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const map = nums.reduce((acc, cur) => {
		acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;
		return acc;
	}, {});

	for (const key in map) {
		if (map[key] === 1) return key;
	}
};

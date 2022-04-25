const question = `给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。`;

const singleNumber = (nums) => {
	return nums.reduce((acc, cur) => {
		return acc ^ cur;
	});
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function (nums) {
	const map = new Map();

	for (const key of nums) {
		const item = map.get(key);
		if (item) {
			map.set(key, item + 1);
		} else {
			map.set(key, 1);
		}
	}

	for (const item of map) {
		const [key, val] = item;
		if (val === 1) return key;
	}
};



console.log(singleNumber([4, 1, 2, 1, 2]));

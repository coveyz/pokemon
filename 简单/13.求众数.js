const question = `给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在众数。`;

const majorityElement = nums => {
	const count = nums.length / 2;
	const countObj = nums.reduce((acc, cur) => {
		if (acc[cur]) {
			acc[cur] += 1;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {});
	for (const key in countObj) {
		if (countObj[key] > count) {
			return key;
		}
	}
};

console.log(majorityElement([2, 2]));

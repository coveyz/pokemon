const question = `
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
`;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent1 = (nums, k) => {
	const obj = nums.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		return acc;
	}, {});

	nums.sort((a, b) => {
		return obj[b] - obj[a];
	});

	const arr = [];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (arr.indexOf(element) === -1) {
			if (arr.length < k) {
				arr.push(element);
			} else {
				break;
			}
		}
	}
	return arr;
};

const topKFrequent = (nums, k) => {
	const obj = nums.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		return acc;
	}, {});

	nums.sort((a, b) => {
		return obj[b] - obj[a];
	});

	nums = [...new Set(nums)];

	return nums.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([3, 0, 1, 0], 1));
console.log(topKFrequent([1], 1));

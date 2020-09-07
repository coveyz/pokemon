const question = `给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。`;

const threeSum = (array) => {
	array.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < array.length - 2; i++) {
		for (let j = i + 1; j < array.length - 1; j++) {
			for (let k = j + 1; k < array.length; k++) {
				if (array[i] + array[j] + array[k] === 0) {
					res.push([array[i], array[j], array[k]]);
				}
			}
		}
	}

	return res;
};

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));

const question = `给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。`;

/* 1.0 */
const singleNumber = (nums) => {
	let res = [];
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (res.includes(element)) {
			res = res.filter((item) => item !== element);
		} else {
			res.push(element);
		}
	}
	return res;
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));

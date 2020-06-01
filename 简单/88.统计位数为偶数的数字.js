const question = `给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。`;

const findNumbers = (nums) => {
	var evenNumber = 0;
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		const curNumberLength = element.toString().length;
		if (curNumberLength % 2 === 0) {
			evenNumber += 1;
		}
	}
	return evenNumber;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));

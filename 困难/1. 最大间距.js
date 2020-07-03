const question = `给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
如果数组元素个数小于 2，则返回 0。`;

const maximumGap = (nums) => {
	if (nums.length === 1) return 0;
	const newNumGp = nums.sort((a, b) => b - a);
	let maxNumber = 0;

	for (let index = 0; index < newNumGp.length; index++) {
		const element = newNumGp[index];
		const nextElement = newNumGp[index + 1];

		const difference = element - nextElement;

		if (difference > maxNumber) {
			maxNumber = difference;
		}
	}
	return maxNumber;
};

console.log(maximumGap([3, 6, 9, 1]));
console.log(maximumGap([3]));

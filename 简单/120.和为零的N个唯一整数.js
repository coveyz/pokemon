const question = `给你一个整数 n，请你返回 任意 一个由 n 个 各不相同 的整数组成的数组，并且这 n 个数相加和为 0 。`;

const sumZero = (n) => {
	const res = [];
	let sum = 0;
	for (let index = 0; index < n - 1; index++) {
		res.push(index);
		sum += index;
	}
	res.push(-sum);

	return res;
};

console.log(sumZero(5));
console.log(sumZero(4));

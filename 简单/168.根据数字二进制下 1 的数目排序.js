const questin = `
给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
请你返回排序后的数组。
`;

const sortByBits = (arr) => {
	const arrOneNumber = arr.reduce((acc, cur) => {
		const oneNumber = cur.toString(2).replace(/0/g, '').length;
		acc[cur] = oneNumber;
		return acc;
	}, {});
	return arr.sort((a, b) => {
		if (arrOneNumber[a] === arrOneNumber[b]) {
			return a - b;
		} else {
			return arrOneNumber[a] - arrOneNumber[b];
		}
	});
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([10, 100, 1000, 10000]));

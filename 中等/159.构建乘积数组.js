const question = `
给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积, 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法
`;

/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
	if (!a || !a.length) return [];
	const zeroStart = a.indexOf(0),
		zeroEnd = a.lastIndexOf(0);

	//* 超过一个0
	if (zeroStart > -1 && zeroStart !== zeroEnd) {
		return a.slice().fill(0);
	} else {
		const result = a.reduce((m, i) => (i == 0 ? m : m * i));
		//* 只有一个 0
		if (zeroStart > -1 && zeroStart === zeroEnd) {
			const newArr = a.slice().fill(0);
			newArr[zeroStart] = result;
			return newArr;
		} else {
			return a.map((item) => result / item);
		}
	}
};
console.log(constructArr([1, 2, 3, 4, 5]));
// console.log(constructArr([1, 2, 0, 4, 5]));

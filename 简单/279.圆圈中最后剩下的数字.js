const question = `
0,1,···,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。求出这个圆圈里剩下的最后一个数字。
例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
`;

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
	const fn = (n, m) => {
		if (n === 1) return 0;

		const res = fn(n - 1, m);

		return (m + res) % n;
	};

	return fn(n, m);
};

// console.log(lastRemaining(5, 3));
// console.log(lastRemaining(70866, 116922));
console.log(lastRemaining(10, 17));

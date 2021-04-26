const question = `
给你两个正整数 n 和 k 。
如果正整数 i 满足 n % i == 0 ，那么我们就说正整数 i 是整数 n 的因子。
考虑整数 n 的所有因子，将它们 升序排列 。请你返回第 k 个因子。如果 n 的因子数少于 k ，请你返回 -1 。
`;
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
	const arr = [];
	for (let index = 0; index <= n; index++) {
		if (n % index === 0) {
			arr.push(index);
		}
	}
	return arr[k - 1] ? arr[k - 1] : -1;
};

console.log(kthFactor(12, 3));
console.log(kthFactor(7, 2));
console.log(kthFactor(4, 4));
console.log(kthFactor(1, 1));
console.log(kthFactor(1000, 3));

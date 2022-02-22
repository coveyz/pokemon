const question = `
给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。
`;

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	const isPrime = new Array(n).fill(1);
	let ans = 0;

	for (let index = 2; index < n; index++) {
		if (isPrime[index]) {
			ans += 1;

			for (let key = index * index; key < n; key += index) {
				isPrime[key] = 0;
			}
		}
	}

	return ans;
};

console.log(countPrimes(417498));

/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	let map = new Map([
		[2, 1],
		[3, 2],
	]);

	const record = (n) => {
		if (map.has(n)) return map.get(n);
		let res = -1;
		// 长度 n 剪一刀， 接下来可以选择 ✂️ 或者 不✂️；
		// ✂️ 1刀长度为 i 时候， 此时最大值 Max(i * (n-i),i*record(n-i))
		// record 记录长度为n时的所有情况， 此时需要使用res

		for (let index = 1; index < n; index++) {
			res = Math.max(res, index * (n - index), index * record(n - index));
		}
		map.set(n, res);
		return res;
	};

	return record(n);
};

console.log(cuttingRope(10));

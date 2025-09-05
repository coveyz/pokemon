const question = `
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
`;

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n === 0) return 0;
	if (n === 1 || n === 2) return 1;

	let first = 1;
	let second = 1;

	for (let index = 2; index < n; index++) {
		[first, second] = [second, (first + second) % 1000000007];
	}

	return second;
};

/**
 ** 队列
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n === 0) return n;
	if (n === 1 || n === 2) return 1;
	const queue = [1, 1];
	let pos = 2;

	while (pos < n) {
		const first = queue.shift(),
			end = queue[0];
		let result = (first + end) % 1000000007;
		queue.push(result);
		pos += 1;
	}

	return queue[1];
};

console.log(fib(45));

console.log(fib(2));
console.log(fib(5));
console.log(fib(45));

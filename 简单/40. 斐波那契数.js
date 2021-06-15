const question = `斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)。`;

// 第一种
const fib = (number) => {
	if (number === 0) return 0;
	if (number === 1 || number === 2) return 1;

	let ac1 = 1,
		ac2 = 1;
	for (let index = 2; index < number; index++) {
		[ac1, ac2] = [ac2, ac1 + ac2];
	}
	return ac2;
};

// 第二种
const fib1 = (number, ac1 = 1, ac2 = 1) => {
	if (number === 0) return 0;
	if (number === 1 || number === 2) return ac2;

	return fib(number - 1, ac2, ac1 + ac2);
};

console.log(fib(45));
// console.log(fib(3))
// console.log(fib(10))

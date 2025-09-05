const question = `写一个程序，输出从 1 到 n 数字的字符串表示。
1. 如果 n 是3的倍数，输出“Fizz”；
2. 如果 n 是5的倍数，输出“Buzz”；
3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。`;

const fizzBuzz = nums => {
	let res = [];
	for (let index = 1; index <= nums; index++) {
		if (index % 3 === 0 && index % 5 === 0) {
			res.push('FizzBuzz');
			continue;
		} else if (index % 3 === 0) {
			res.push('Fizz');
		} else if (index % 5 === 0) {
			res.push('Buzz');
		} else {
			res.push(index.toString());
		}
	}
	return res;
};

console.log(fizzBuzz(15));

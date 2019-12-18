const question = `给定一个整数，写一个函数来判断它是否是 3 的幂次方。`;

const isPowerOfThree1 = n => {
	if (n === 0) return false;
	let index = 0;
	let compareNum = 0;
	while (compareNum < n) {
		compareNum = Math.pow(3, index);
		index += 1;
	}
	return compareNum === n;
};
// 不太好
const isPowerOfThree = n => {
	if (n === 0) return false;
	while (n % 3 === 0) {
    n /= 3;
	}
	console.log(n);
	return n === 1;
};
console.log(isPowerOfThree(45));
// console.log(isPowerOfThree(1));
// console.log(isPowerOfThree(0));
// console.log(isPowerOfThree(9));
// console.log(isPowerOfThree(27));

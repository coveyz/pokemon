/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	// const target = n.toString();
	// let sum = 0,
	// 	result = 1;

	// for (let index = 0; index < target.length; index++) {
	// 	const element = target[index] * 1;
	// 	sum += element;
	// 	result *= element;
	// }

	// return result - sum;

	let add = 0,
		mul = 1;
	while (n > 0) {
		let digit = n % 10;
		n = Math.floor(n / 10);
		add += digit;
		mul *= digit;
	}
	return mul - add;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));

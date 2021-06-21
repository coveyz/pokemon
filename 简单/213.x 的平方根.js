const question = `
实现 int sqrt(int x) 函数。
计算并返回 x 的平方根，其中 x 是非负整数。
由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
`;
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (num) {
	// let low = 0;
	// let height = num;
	// while (low <= height) {
	// 	let middle = (low + height + 1) >> 1;
	// 	let guess = middle * middle;
	// 	if (guess > num) {
	// 		height = Math.floor(middle) - 1;
	// 	} else if (guess < num) {
	// 		low = Math.floor(middle) + 1;
	// 	} else {
	// 		return Math.floor(middle);
	// 	}
	// }
	// console.log('xxx=>', low);
	// return Math.floor(low);
	const sqrtNumber = Math.sqrt(num);

	return sqrtNumber % 1 === 0 ? sqrtNumber : Math.floor(sqrtNumber);
};

console.log(mySqrt(4));
console.log(mySqrt(8));

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
	const sqrtNumber = Math.sqrt(num);

	return sqrtNumber % 1 === 0 ? sqrtNumber : Math.floor(sqrtNumber);
};

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function (x) {
	let left = 0,
		right = x,
		ans = -1;

	while (left <= right) {
		const middle = left + Math.floor((right - left) / 2);
		let result = middle * middle;
		if (result <= x) {
			ans = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return ans;
};

console.log(mySqrt(4));
console.log(mySqrt(8));

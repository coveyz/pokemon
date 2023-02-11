/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	// if (n < 10) {
	// 	return n === 1;
	// }

	// const magic = (str) => {
	// 	let sum = 0;

	// 	for (let index = 0; index < str.length; index++) {
	// 		const element = str[index] * 1;
	// 		sum += Math.pow(element, 2);
	// 	}

	// 	if (sum < 10) {
	// 		return sum === 1;
	// 	}

	// 	return magic(sum.toString());
	// };

	// return magic(n.toString());
	//把n作为key,记录已经写入
	const map = {};
	while (n != 1) {
		if (map[n]) {
			return false;
		}
		map[n] = true;
		//通过String函数把整数分割成为数组
		//e.g: "19" = ["1","9"]
		// 字符串与字符串相乘会变成和（整数）
		// ** 指数相乘
		n = String(n)
			.split('')
			.map((item) => item ** 2)
			.reduce((acc, cur) => acc + cur);

    console.log(n)
	}
	return true;
};

console.log(isHappy(19));
console.log(isHappy(7));

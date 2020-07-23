const question = `我们正在玩一个猜数字游戏。 游戏规则如下：
我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。
每次你猜错了，我会告诉你这个数字是大了还是小了。
你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：

-1 : 我的数字比较小
 1 : 我的数字比较大
 0 : 恭喜！你猜对了！
`;

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let left = 0;
	let right = n;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		console.log('middle->', middle);
		let jude = guess(middle);
		console.log('jude->', jude);
		if (jude === 0) {
			console.log('正好', middle);
			return middle;
		} else if (jude === -1) {
			right = middle - 1;
			console.log('我的数字比较小->', left, middle, right);
		} else if (jude === 1) {
			left = middle + 1;
			console.log('我的数字比较大->', left, middle, right);
		}
	}
};

console.log(guessNumber(10));

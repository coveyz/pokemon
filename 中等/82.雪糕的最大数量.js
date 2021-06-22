const question = `
夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。
商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。
给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。
注意：Tony 可以按任意顺序购买雪糕。
`;
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
	costs.sort((a, b) => a - b);
	let count = 0;
	for (let index = 0; index <= costs.length; index++) {
		const element = costs[index];
		if (coins >= element) {
			coins = coins - element;
			count += 1;
		} else {
			break;
		}
	}

	return count;
};

// console.log(maxIceCream([1, 3, 2, 4, 1], 7));
// console.log(maxIceCream([10, 6, 8, 7, 7, 8], 5));
// console.log(maxIceCream([1, 6, 3, 1, 2, 5], 20));
// console.log(maxIceCream([6, 2, 8, 8, 5, 6, 6, 2, 2, 2], 77));
console.log(
	maxIceCream(
		[
			27,
			23,
			33,
			26,
			46,
			86,
			70,
			85,
			89,
			82,
			57,
			66,
			42,
			18,
			18,
			5,
			46,
			56,
			42,
			82,
			52,
			78,
			4,
			27,
			96,
			74,
			74,
			52,
			2,
			24,
			78,
			18,
			42,
			10,
			12,
			10,
			80,
			30,
			60,
			38,
			32,
			7,
			98,
			26,
			18,
			62,
			50,
			42,
			15,
			14,
			32,
			86,
			93,
			98,
			47,
			46,
			58,
			42,
			74,
			69,
			51,
			53,
			58,
			40,
			66,
			46,
			65,
			2,
			10,
			82,
			94,
			26,
			6,
			78,
			2,
			101,
			97,
			16,
			12,
			18,
			71,
			5,
			46,
			22,
			58,
			12,
			18,
			62,
			61,
			51,
			2,
			18,
			34,
			12,
			36,
			58,
			20,
			12,
			17,
			70,
		],
		241
	)
);

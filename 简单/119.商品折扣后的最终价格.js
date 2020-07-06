const question = `给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。
商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。
请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。`;

const finalPrices = (prices) => {
	const len = prices.length;
	for (let index = 0; index < len; index++) {
		const element = prices[index];
		for (let idx = index + 1; idx < len; idx++) {
			const item = prices[idx];
			if (element >= item) {
				prices[index] = prices[index] - prices[idx];
				break;
			}
		}
	}
	return prices;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));

const question = `
小区便利店正在促销，用 numExchange 个空酒瓶可以兑换一瓶新酒。你购入了 numBottles 瓶酒。
如果喝掉了酒瓶中的酒，那么酒瓶就会变成空的。
请你计算 最多 能喝到多少瓶酒。
`;
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
	let count = numBottles; //* 记录我喝了多少

	/**
	 *
	 * @param {*} bottom 多少个空瓶子
	 * @returns
	 */
	const calculation = (bottom) => {
		if (bottom < numExchange) {
			return;
		}
		const exchangeBottle = Math.floor(bottom / numExchange);
		count += exchangeBottle; //* 现在的酒 + 可以换到的酒
		const resultBottle = exchangeBottle + (bottom % numExchange);
		calculation(resultBottle);
	};

	calculation(numBottles);

	return count;
};

console.log(numWaterBottles(9, 3));
console.log(numWaterBottles(15, 4));

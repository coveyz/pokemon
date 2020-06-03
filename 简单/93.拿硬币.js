const question = `桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。`;

// const minCount = (coins) => {
// 	const frequency = coins.reduce((acc, cur) => {
// 		if (cur % 2) {
// 			// 奇数
// 			acc.push((cur + 1) / 2);
// 		} else {
// 			// 偶数
// 			acc.push(cur / 2);
// 		}
// 		return acc;
// 	}, []).reduce((acc,cur) => acc += cur,0)
// 	return frequency;
// };

// const minCount = (coins) => {
// 	const frequency = coins
// 		.reduce((acc, cur) => {
// 			if (cur % 2) {
// 				// 奇数
// 				acc.push((cur + 1) / 2);
// 			} else {
// 				// 偶数
// 				acc.push(cur / 2);
// 			}
// 			return acc;
// 		}, [])
// 		.reduce((acc, cur) => (acc += cur), 0);
// 	return frequency;
// };
const minCount = (coins) => {
	const frequency = coins.reduce((acc, cur) => {
		if (cur % 2) {
			// 奇数
      acc += (cur + 1) / 2
		} else {
      // 偶数
      acc += cur / 2
		}
		return acc;
	}, 0);
	return frequency;
};

console.log(minCount([4, 2, 1]));
console.log(minCount([2, 3, 10]));

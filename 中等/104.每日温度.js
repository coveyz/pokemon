const question = `
请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。
`;

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	const temperaturesArr = [];

	for (let index = 0; index < temperatures.length; index++) {
		const today = temperatures[index];
		// console.log(today);

		for (let key = index + 1; key < temperatures.length; key++) {
			const tommorrow = temperatures[key];
			// console.log('today=>', today, 'tommorrow=>', tommorrow, 'index=>', index, 'key=>', key);

			if (tommorrow > today) {
				temperaturesArr[index] = key - index;
				break;
			} else {
				temperaturesArr[index] = 0;
			}
		}
	}

	temperaturesArr.push(0);

	return temperaturesArr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));

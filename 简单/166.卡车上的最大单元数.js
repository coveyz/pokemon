const question = `
请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi] ：
numberOfBoxesi 是类型 i 的箱子的数量。
numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。
返回卡车可以装载 单元 的 最大 总数。
`;

var maximumUnits = function (boxTypes, truckSize) {
	const order = boxTypes.sort((a, b) => b[1] - a[1]);
	let count = 0;
	for (let index = 0; index < order.length; index++) {
		const element = order[index];
		if (truckSize === 0) {
			return count;
		} else if (truckSize >= element[0]) {
			count = count + element[0] * element[1];
			truckSize = truckSize - element[0];
			// console.log('大于等于', truckSize, element[0], count);
		} else if (truckSize < element[0]) {
			count = count + truckSize * element[1];
			truckSize = 0;
			// console.log('小于', truckSize, element[0], count);
		}
	}
	return count;
};

console.log(
	maximumUnits(
		[
			[1, 3],
			[2, 2],
			[3, 1],
		],
		4
	)
);
console.log(
	maximumUnits(
		[
			[5, 10],
			[2, 5],
			[4, 7],
			[3, 9],
		],
		10
	)
);

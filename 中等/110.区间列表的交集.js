const question = `
给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。每个区间列表都是成对 不相交 的，并且 已经排序 。
返回这 两个区间列表的交集 。
形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。
两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。
`;

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	if (!firstList.length || !secondList.length) return [];
	const container = [];
	let green = 0,
		red = 0;

	while (green < firstList.length && red < secondList.length) {
		//* 交集的左端 选择大的
		const start = Math.max(firstList[green][0], secondList[red][0]);
		//* 交集的右端 选择小的
		const end = Math.min(firstList[green][1], secondList[red][1]);

		//* 出现交集
		if (start <= end) {
			container.push([start, end]);
		}

		//* 谁的指针先结束了 谁就考察下一个节点 ->
		//* 因为较长的指针还有可能和别的节点 进行重合 他的指针先不动
		if (firstList[green][1] < secondList[red][1]) {
			green += 1;
		} else {
			red += 1;
		}
	}

	return container;
};

console.log(
	intervalIntersection(
		[
			[0, 2],
			[5, 10],
			[13, 23],
			[24, 25],
		],
		[
			[1, 5],
			[8, 12],
			[15, 24],
			[25, 26],
		]
	)
);
console.log(
	intervalIntersection(
		[
			[1, 3],
			[5, 9],
		],
		[]
	)
);
console.log(
	intervalIntersection(
		[],
		[
			[4, 8],
			[10, 12],
		]
	)
);

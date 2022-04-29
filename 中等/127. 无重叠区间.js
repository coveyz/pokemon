const question = `
给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。
`

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	if (!intervals.length) return 0;
	intervals.sort((a, b) => a[1] - b[1]);
	const len = intervals.length;
	let ans = 1,
		right = intervals[0][1];
	console.log('arr=>', intervals);
	for (let index = 0; index < len; index++) {
		const firstItem = intervals[index][0];
		console.log('firstItem=>', firstItem, 'right=>', right);
		if (firstItem >= right) {
			ans += 1;
			right = intervals[index][1];
		}
	}

	return len - ans;
};

let intervals = [
	[1, 2],
	[2, 3],
	[3, 4],
	[1, 3],
];

console.log(eraseOverlapIntervals(intervals));

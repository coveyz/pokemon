const question = `
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
`;

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	const arr = [],
		len = intervals.length;
	if (len <= 1) return intervals;
	intervals = intervals.sort((a, b) => a[0] - b[0]);

	arr.unshift([intervals[0][0], intervals[0][1]]); //* 放到前头

	for (let index = 0; index < len; index++) {
		let ref = arr[0];

		if (intervals[index][0] <= ref[1]) {
			ref[1] = Math.max(ref[1], intervals[index][1]);
		} else {
			arr.unshift([intervals[index][0], intervals[index][1]]);
		}
		// console.log('ref=>', ref, 'cur=>', intervals[index]);
	}

	return arr;
};




/**
 ** 合并区间 排序 中间变量
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	const result = [];
	let tmp = intervals[0];

	for (let index = 1; index < intervals.length; index++) {
		const [start, end] = intervals[index];
		//* 没有交集
		if (start > tmp[1]) {
			result.push(tmp);
			tmp = [start, end];
		}
		if (start < tmp[0] || end > tmp[1]) {
			const tmpStart = start <= tmp[0] ? start : tmp[0],
				tmpEnd = end >= tmp[1] ? end : tmp[1];
			tmp = [tmpStart, tmpEnd];
		}
	}

	if (tmp.length) {
		result.push(tmp);
	}

	return result;
};


// let intervals = [[1, 3],[2, 6],[8, 10],[15, 18]];
// let intervals = [
// 	[1, 4],
// 	[4, 5],
// ];

let intervals = [
	[2, 3],
	[2, 2],
	[3, 3],
	[1, 3],
	[5, 7],
	[2, 2],
	[4, 6],
];
console.log(merge(intervals));

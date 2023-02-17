const question = `
 给你一个由非负整数 a1, a2, ..., an 组成的数据流输入，请你将到目前为止看到的数字总结为不相交的区间列表。

实现 SummaryRanges 类：
SummaryRanges() 使用一个空数据流初始化对象。
void addNum(int val) 向数据流中加入整数 val 。
int[][] getIntervals() 以不相交区间 [starti, endi] 的列表形式返回对数据流中整数的总结。
`;

/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
	this.container = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
	if (this.container.includes(val)) return;
	this.container.push(val);
	this.container.sort((a, b) => a - b);
	console.log('xx=>', this.container);
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
	const result = [];
	let tmp = [];
	for (let index = 0; index < this.container.length; index++) {
		const element = this.container[index];
		tmp.push(element); //* 基础增加

		if (element + 1 !== this.container[index + 1]) {
			//* 就一个节点 那 ok
			if (tmp.length === 1) {
				tmp.push(element);
				result.push(tmp);
				tmp = [];
			} else {
				result.push([tmp[0], Math.max(tmp[tmp.length - 1], element)]);
				tmp = [];
			}
		}
	}
	console.log('result=>', result);
	return result;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

let summaryRanges = new SummaryRanges();
summaryRanges.addNum(1); // arr = [1]
summaryRanges.addNum(1); // arr = [1]
summaryRanges.getIntervals(); // 返回 [[1, 1]]
summaryRanges.addNum(3); // arr = [1, 3]
summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3]]
summaryRanges.addNum(7); // arr = [1, 3, 7]
summaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3], [7, 7]]
summaryRanges.addNum(2); // arr = [1, 2, 3, 7]
summaryRanges.getIntervals(); // 返回 [[1, 3], [7, 7]]
summaryRanges.addNum(6); // arr = [1, 2, 3, 6, 7]
summaryRanges.getIntervals(); // 返回 [[1, 3], [6, 7]]

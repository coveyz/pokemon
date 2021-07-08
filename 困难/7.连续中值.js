const question = `
随机产生数字并传递给一个方法。你能否完成这个方法，在每次产生新值时，寻找当前所有值的中间值（中位数）并保存。
中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，
[2,3,4] 的中位数是 3
[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：
void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。
`;
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
	this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
	this.arr.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
	this.arr.sort((a, b) => a - b);
	const len = this.arr.length;
	//* 偶数

	if (len % 2 === 0) {
		return (this.arr[this.arr.length / 2] + this.arr[this.arr.length / 2 - 1]) / 2;
	}
	//* 奇数
	else {
		return this.arr[(this.arr.length - 1) / 2];
	}
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

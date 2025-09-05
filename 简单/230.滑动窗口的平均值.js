const question = `
给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算滑动窗口里所有数字的平均值。
实现 MovingAverage 类：
MovingAverage(int size) 用窗口大小 size 初始化对象。
double next(int val) 成员函数 next 每次调用的时候都会往滑动窗口增加一个整数，请计算并返回数据流中最后 size 个值的移动平均值，即滑动窗口里所有数字的平均值。
`;

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
	this.size = size;
	this.contain = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
	const len = this.contain.length;

	if (len >= this.size) {
		this.contain.shift();
	}

	this.contain.push(val);

	const sum = this.contain.reduce((acc, cur) => acc + cur, 0);

	return sum / this.contain.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // 返回 1.0 = 1 / 1
// console.log(movingAverage.next(10)); // 返回 5.5 = (1 + 10) / 2
// console.log(movingAverage.next(3)); // 返回 4.66667 = (1 + 10 + 3) / 3
// console.log(movingAverage.next(5));

/**
 ** 暴力遍历
 */
var MyCalendar = function () {
	this.arr = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
	const len = this.arr.length;
	if (len === 0) {
		this.arr.push([start, end]);
		return true;
	}

	for (const key of this.arr) {
		const [left, right] = key;
		right = key[1];
		if (left > end && right < start) return false;
	}

	this.arr.push([start, end]);
	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */



/**
 ** 二分查找
 */
 var MyCalendar = function () {
	this.arr = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
	const len = this.arr.length;
	if (len === 0) {
		this.arr.push([start, end]);
		return true;
	}

	let left = 0,
		right = this.arr.length;

	while (left < right) {
		const middle = (left + right) >> 1;
		const [startItem, endItem] = this.arr[middle];

		if (start >= endItem) {
			left = middle + 1;
		} else if (end <= startItem) {
			right = middle;
		} else {
			return false;
		}
	}
	// this.arr.push([start, end]);

	// this.arr.sort((a, b) => a[0] - b[0]);
    this.arr.splice(left,0,[start,end])


	return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */



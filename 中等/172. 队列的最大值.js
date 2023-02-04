const question = `
请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
若队列为空，pop_front 和 max_value 需要返回 -1
`;

var MaxQueue = function () {
	this.data_queue = [];
	this.max_queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
	// return this.max_queue[this.max_queue.length - 1];
	return this.data_queue.length ? this.max_queue[0] : -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
	this.data_queue.push(value);

	while (this.max_queue.length && this.max_queue[this.max_queue.length - 1] < value) {
		this.max_queue.pop();
	}

	this.max_queue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
	if (!this.data_queue.length) return -1;
	const item = this.data_queue.shift();

	if (item === this.max_queue[0]) {
		this.max_queue.shift();
	}

	return item;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

const question = `
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
`;
// var CQueue = function () {
// 	this.arr = [];
// };

// /**
//  * @param {number} value
//  * @return {void}
//  */
// CQueue.prototype.appendTail = function (value) {
// 	this.arr.push(value);
// };

// /**
//  * @return {number}
//  */
// CQueue.prototype.deleteHead = function () {
// 	if (this.arr.length === 0) return -1;

// 	return this.arr.shift();
// };

/**
 *todo 两个栈实现一个队列🐻
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var CQueue = function () {
	this.stack_1 = [];
	this.stack_2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
	this.stack_1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
	if (this.stack_1.length === 0 && this.stack_2.length === 0) {
		return -1;
	}

	if (this.stack_2.length === 0) {
		while (this.stack_1.length) {
			this.stack_2.push(this.stack_1.pop());
		}
	}

	return this.stack_2.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

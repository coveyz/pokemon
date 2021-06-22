const question = `
定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
`;

/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.data_stack = [];
	this.min_stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.data_stack.push(x);

	if (this.min_stack.length === 0 || x < this.min_stack[this.min_stack.length - 1]) {
		this.min_stack.push(x);
	} else {
		this.min_stack.push(this.min_stack[this.min_stack.length - 1]);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.data_stack.pop();
	this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.data_stack[this.data_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
	return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

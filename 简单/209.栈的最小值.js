const question = `
请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。
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
MinStack.prototype.getMin = function () {
	return this.min_stack[this.min_stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

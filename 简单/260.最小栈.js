const question = `设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:
MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
`;

var MinStack = function () {
	this.data_stack = [];
	this.min_stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.data_stack.push(val);

	if (this.min_stack.length === 0 || val < this.min_stack[this.min_stack.length - 1]) {
		this.min_stack.push(val);
	} else {
		this.min_stack.push(this.min_stack[this.min_stack.length - 1]);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.min_stack.pop();
	return this.data_stack.pop();
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
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());

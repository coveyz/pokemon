const question = `
给定一个迭代器类的接口，接口包含两个方法： next() 和 hasNext()。设计并实现一个支持 peek() 操作的顶端迭代器 -- 其本质就是把原本应由 next() 方法返回的元素 peek() 出来。
`;

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
	this.index = 0;
	this.arr = [];

	while (iterator.hasNext()) {
		this.arr.push(iterator.next());
	}
	this.len = this.arr.length;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
	return this.arr[this.index];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
	return this.arr[this.index++];
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
	return this.index < this.len;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

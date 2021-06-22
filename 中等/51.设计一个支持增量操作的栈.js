/**
 * @param {number} maxSize
 */
 var CustomStack = function (maxSize) {
	this.maxSize = maxSize;
	this.arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
	if (this.arr.length < this.maxSize) {
		this.arr.push(x);
	}
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (!this.arr.length) {
    return -1
  } else {
    const deleteNumber = this.arr.pop();
    return deleteNumber
  }

};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (let i = 0; i < k && i < this.arr.length; i++) {
    this.arr[i] += val
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

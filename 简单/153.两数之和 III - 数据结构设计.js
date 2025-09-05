const question = `设计并实现一个 TwoSum 的类，使该类需要支持 add 和 find 的操作。
add 操作 -  对内部数据结构增加一个数。
find 操作 - 寻找内部数据结构中是否存在一对整数，使得两数之和与给定的数相等。`;

/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
	this.obj = {};
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
	if (this.obj[number]) {
		this.obj[number] += 1;
	} else {
		this.obj[number] = 1;
	}
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
	for (const key in this.obj) {
		if ((value - Number(key) !== Number(key) && this.obj[value - key]) || (value - Number(key) === Number(key) && this.obj[key] >= 2)) {
			return true;
		}
	}

	return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

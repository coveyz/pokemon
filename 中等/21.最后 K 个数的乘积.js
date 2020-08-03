const question = `请你实现一个「数字乘积类」ProductOfNumbers，要求支持下述两种方法：

1. add(int num)

将数字 num 添加到当前数字列表的最后面。
2. getProduct(int k)

返回当前数字列表中，最后 k 个数字的乘积。
你可以假设当前列表中始终 至少 包含 k 个数字。
题目数据保证：任何时候，任一连续数字序列的乘积都在 32-bit 整数范围内，不会溢出。`;

var ProductOfNumbers = function () {
	this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
	this.arr.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
	const res = [];
	var number = 0;
	const len = this.arr.length;
	for (let index = len - 1; index >= 0; index--) {
		const element = this.arr[index];
		res.push(element);
		number += 1;
		if (number === k) {
			break;
		}
	}
	const sum = res.reduce((acc, cur) => {
		acc *= cur;
		return acc;
	}, 1);
	console.log(sum);
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

var productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);
productOfNumbers.add(0);
productOfNumbers.add(2);
productOfNumbers.add(5);
productOfNumbers.add(4);
productOfNumbers.getProduct(2);
productOfNumbers.getProduct(3);
productOfNumbers.getProduct(4);
productOfNumbers.add(8);
productOfNumbers.getProduct(2);

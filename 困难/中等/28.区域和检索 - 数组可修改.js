const question = `给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。`;

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.arr = nums;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
	this.arr[i] = val;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
	var sum = 0;
	for (let index = 0; index < this.arr.length; index++) {
		const element = this.arr[index];
		if (index >= i && index <= j) {
			sum += element;
		}
	}
	return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

var obj = new NumArray([1, 3, 5]);
console.log(obj.sumRange(0, 2));
console.log(obj.update(1, 2));
console.log(obj.sumRange(0, 2));

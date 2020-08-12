const quesion = `给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。`;

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.arr = nums;
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
 * var param_1 = obj.sumRange(i,j)
 */

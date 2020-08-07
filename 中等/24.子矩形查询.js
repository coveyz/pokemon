/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
	this.ranks = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
	// 行
	for (let index = row1; index <= row2; index++) {
		// 列
		for (let idx = col1; idx <= col2; idx++) {
			this.ranks[index][idx] = newValue;
		}
  }
  
  console.log(this.ranks)
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.matrix[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */

var subrectangleQueries = new SubrectangleQueries([
	[1, 2, 1],
	[4, 3, 4],
	[3, 2, 1],
	[1, 1, 1],
]);

subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);

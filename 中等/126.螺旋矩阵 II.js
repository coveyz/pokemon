const question = `
给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
`;

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let arr = new Array(n).fill(0).map((item) => new Array(n).fill(0));
	let start = 1,
		left = 0,
		right = n - 1,
		top = 0,
		bottom = n - 1,
		end = n * n;

	while (start <= end) {
		//* left 👉 right
		for (let index = left; index <= right; index++) {
			arr[top][index] = start++;
		}
		top++;
		//* top 👇 bottom
		for (let index = top; index <= bottom; index++) {
			arr[index][right] = start++;
		}
		right--;
		//* right 👈 left
		for (let index = right; index >= left; index--) {
			arr[bottom][index] = start++;
		}
		bottom--;
		//* bottom 👆 top
		for (let index = bottom; index >= top; index--) {
			arr[index][left] = start++;
		}
		left++;
	}

	return arr;
};

let n = 3;

console.log(generateMatrix(n));

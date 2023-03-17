const question = `
给你两个大小为 n x n 的二进制矩阵 mat 和 target 。现 以 90 度顺时针轮转 矩阵 mat 中的元素 若干次 ，如果能够使 mat 与 target 一致，返回 true ；否则，返回 false 。
`


/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  // 旋转 90 度逻辑
	const rotate = (matrix) => {
		const matrixType = matrix.length,
			arr = new Array(matrixType).fill(0).map((item) => new Array(matrixType).fill(0));
		let rowIndex = 0,
			right = matrix.length - 1;

		for (let index = 0; index < matrix.length; index++) {
			const row = matrix[index];
			for (let key = 0; key < row.length; key++) {
				const col = row[key];
				arr[rowIndex][right] = col;
				rowIndex++;
			}
			rowIndex = 0;
			right--;
		}

    return arr;
	};

  let tmp = mat,index = 0, terminal = target.length * target.length

  while (index < 5) {
     let pos = 0;
    for (let index = 0; index < tmp.length; index++) {
      for (let key = 0; key < tmp[index].length; key++) {
        if (tmp[index][key] !== target[index][key]) {
          break;
        } else {
          pos++;
        }
      }
    }
    
    if (pos === terminal) {
      return true
    }
    
    tmp = rotate(tmp)

    index++;
  }

  return false;
};


console.log(findRotation([[0,1],[1,0]],  [[1,0],[0,1]]))
console.log(findRotation([[0,1],[1,1]],[[1,0],[0,1]]))

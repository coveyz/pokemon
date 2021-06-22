const question = `给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵`

const generateMatrix = n => {
  const newArr = new Array(n).fill(0).map(item => new Array(n).fill(0))
  let num = 1, left = 0, right= n - 1, top = 0, bottom = n-1
  const target = n * n
  while (num <= target) {
    // left 👉 right
    for (let index = left; index <= right; index++) {
      newArr[top][index] = num ++
    }
    top++
    // top 👇 bottom
    for (let index = top; index <= bottom; index++) {
      newArr[index][right] = num ++
    }
    right--
    // right 👈 left
    for (let index = right; index >= left; index--) {
      newArr[bottom][index] = num++
    }
    bottom--
    // bottom 👆 top
    for (let index = bottom; index >= top; index--) {
      newArr[index][left] = num++
    }
    left++
  }
  return newArr
}

console.log(generateMatrix(7));

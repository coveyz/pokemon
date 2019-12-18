const question = `给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。`

const sortedSquares = (A) => {
  return A.map(item => Math.pow(item,2)).sort((a,b) => a-b)
}

console.log(sortedSquares([-7,-3,2,3,11]));

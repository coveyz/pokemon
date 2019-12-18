const question = `给定已经按升序排列、由不同整数组成的数组 A，返回满足 A[i] == i 的最小索引 i。如果不存在这样的 i，返回 -1。`

const fixedPoint = (A) => {
  let point = -1
  for (let index = 0; index < A.length; index++) {
    if (A[index] === index) {
      point = index
      break;
    }
  }
  return point
}

console.log(fixedPoint([-10,-5,0,3,7]))
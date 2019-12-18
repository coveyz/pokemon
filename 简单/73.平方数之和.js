const question = `给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。`

const judgeSquareSum = num => {
  const condition = /^\+?[1-9][0-9]*$/
  if (num === 0 || num === 1) return true
  for (let index = 0; index * index <= num; index++) {
    if (Math.pow(index,2) > num) return false
    const requestNum = num - Math.pow(index,2)
    if (condition.test(Math.sqrt(requestNum))) return true
  }
  return false
}

console.log(judgeSquareSum(3))
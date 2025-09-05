const question = `输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999`

const printNumbers = nums => {
  const arr = []
  const maxNums = Math.pow(10, nums)
  for (let index = 1; index < maxNums; index++) {
    arr.push(index)
  }

  return arr
}

console.log(printNumbers(1))
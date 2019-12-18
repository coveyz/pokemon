const question = `给定一个整数，编写一个函数来判断它是否是 4 的幂次方。`

const isPowerOfFour = num => {
  if (num === 0) return false
  let index = 0
  let compareNum = 0
  while(compareNum < num) {
    compareNum = Math.pow(4,index)
    index ++
  }
  return compareNum === num
}

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
const question = `给定一个整数，编写一个函数来判断它是否是 2 的幂次方。`

const isPowerOfTwo = num => {
  if (num === 0) return false
  let index = 0
  let compareNum = 0
  while(compareNum < num) {
    compareNum = Math.pow(2,index)
    index ++
  }
  return compareNum === num
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))
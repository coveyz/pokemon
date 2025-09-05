const question = `数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
注意：本题相对书上原题稍作改动`

const missingNumber = nums => {
  const maxNumber = nums.length
  for (let index = 0; index <= maxNumber; index++) {
    if (!nums.includes(index)) {
      return index
    }
  }
}

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
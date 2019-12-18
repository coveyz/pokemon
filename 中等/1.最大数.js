const question = `给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。`

const largestNumber = (nums) => {
  if (nums.every(item => item === 0)) return '0'
  
  const largest = nums.sort((a,b) => {
    a = a.toString()
    b = b.toString()
    return Number(a+b) > Number(b+a) ? -1 : 1
  })
  return largest.join('')
}

console.log(largestNumber([3,0,30,34,5,9]));

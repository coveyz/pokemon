const question = `在整数数组中，如果一个整数的出现频次和它的数值大小相等，我们就称这个整数为「幸运数」。
给你一个整数数组 arr，请你从中找出并返回一个幸运数。
如果数组中存在多个幸运数，只需返回 最大 的那个。
如果数组中不含幸运数，则返回 -1 。`

const findLucky = arr => {
  const appearNumber = arr.reduce((acc,cur) => {
    if (acc[cur]) {
      acc[cur] += 1
    } else {
      acc[cur] = 1
    }
    
    return acc
  },{})

  var luckNumber = -1
   Object.keys(appearNumber).forEach(key => {
    if (appearNumber[key] === Number(key)) {
      luckNumber =  key
    } 
  })
  return luckNumber
}

console.log(findLucky([2,2,3,4]))
console.log(findLucky([1,2,2,3,3,3]))
console.log(findLucky([2,2,2,3,3]))
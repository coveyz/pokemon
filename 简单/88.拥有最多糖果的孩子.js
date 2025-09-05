const question = `给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。
对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。`


const kidsWithCandies = (candies, extraCandies) => {
  var maxNum = 0
  for (let index = 0; index < candies.length; index++) {
    const element = candies[index]
    maxNum = maxNum < element? element : maxNum
  }

  return resultArr = candies.reduce((acc,cur) => {
    if (cur + extraCandies >= maxNum) {
      acc.push(true)
    } else {
      acc.push(false)
    }
    return acc
  }, [])

  // return candies.map(e =>{return (e+extraCandies)>=Math.max(...candies)})
}

// console.log(kidsWithCandies([4,2,1,1,2],1))
console.log(kidsWithCandies([2,3,5,1,3],3))
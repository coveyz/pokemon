const question = `给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
请返回 nums 的动态和。`

const runningSum = nums => {
  return sumArr = nums.reduce((acc,cur,index,arr) => {
    if (index === 0) {
      acc.push(cur)
    } else {
      acc.push(cur + acc[index - 1])
    }
    return acc
  },[])
}

console.log(runningSum([1,2,3,4]))
console.log(runningSum([3,1,2,10,1]))
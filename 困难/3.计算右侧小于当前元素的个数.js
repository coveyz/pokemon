const question = `给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。`

var countSmaller = function(nums) {
  const res = []

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    var number = 0
    for (let idx = index  + 1; idx < nums.length; idx++) {
      const item = nums[idx];
      if (element > item) {
        number +=1
      }
    }
    res.push(number)
    number = 0
  }

  return res
};

console.log(countSmaller([5,2,6,1]))
const question = `给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。`

const productExceptSelf = nums => {
  const arr = new Array(nums.length).fill(1)
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    for (let num = 0; num < nums.length; num++) {
      const item = nums[num];
      if (num !== index) {
        arr[index] = arr[index] * item
      }
    }
  }
  return arr
}

console.log(productExceptSelf([1,2,3,4]))
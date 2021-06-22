const question = `给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。`;

// 1.
// const productExceptSelf = nums => {
//   const arr = new Array(nums.length).fill(1)
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     for (let num = 0; num < nums.length; num++) {
//       const item = nums[num];
//       if (num !== index) {
//         arr[index] = arr[index] * item
//       }
//     }
//   }
//   return arr
// }

// 2.0
var productExceptSelf = function(nums) {
  const ret = [];

  for (let i = 0, temp = 1; i < nums.length; i++) {
    ret[i] = temp;
    temp *= nums[i];
  }
  // 此时ret[i]存放的是前i个元素相乘的结果(不包含第i个)

  // 如果没有上面的循环的话，
  // ret经过下面的循环会变成ret[i]存放的是后i个元素相乘的结果(不包含第i个)

  // 我们的目标是ret[i]存放的所有数字相乘的结果(不包含第i个)

  // 因此我们只需要对于上述的循环产生的ret[i]基础上运算即可
  for (let i = nums.length - 1, temp = 1; i >= 0; i--) {
    ret[i] *= temp;
    temp *= nums[i];
  }
  return ret;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([0,0]));

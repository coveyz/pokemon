const question = `在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。`;

const findRepeatNumber = (nums) => {
  const res = []
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    if (res.includes(element)) {
      return element
    } else {
      res.push(element)
    }
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));

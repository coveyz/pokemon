var containsDuplicate = function (nums) {
  const newNums = nums.sort((a,b) => a-b)
  let firstItem = newNums[0]
  for (let index = 1; index < newNums.length; index++) {
    
    if (firstItem === nums[index]) {
      return true
    } else {
      firstItem = nums[index]
    }
  }
  return false
};


console.log(containsDuplicate([2,14,18,22,22]));
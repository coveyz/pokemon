const question = `给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
你可以假设数组中无重复元素。`

// 1
const searchInsert1 = (nums,target) => {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      nums.splice(index,0,target)
      return index
    }
    else if (nums[index] > target) {
      nums.splice(index,0,target)
      return index
    }
    else if (nums[nums.length -1] < target) {
      nums.push(target)
      return nums.length -1
    }
  }
}

// 二分查找
const searchInsert = (nums,target) => {
  let start = 0,    // 头针
      end = nums.length - 1  // 尾针
  while (start <= end) {
    let middle = parseInt((start + end) /2) // 二分法 省时间 找到中间指针

    // 恰好中间正好相等
    if (target === nums[middle]) {
      return middle
    }
    // 在中间的 左面
    else if(target < nums[middle]) {
      end = middle - 1
    }
    // 在中间的 右面
    else {
      start = middle + 1
    }
  }
  return start
}


console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));

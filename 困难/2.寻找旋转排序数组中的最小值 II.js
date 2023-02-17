const question = `假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
请找出其中最小的元素。
注意数组中可能存在重复的元素。`

var findMin = function(nums) {
  return nums.sort((a,b) => a - b)[0]
};


console.log(findMin([1,3,5]))
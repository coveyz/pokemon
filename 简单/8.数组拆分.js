



var arrayPairSum = function(nums) {
  if (nums.length < 3) {
    return nums.sort((a,b) => a-b)[0]
  }
  return nums.sort((a,b) => a-b).filter((_,index) => (index + 1) % 2 !== 0).reduce((acc,cur) => acc + cur,0)
}

console.log(arrayPairSum([6214, -2290, 2833, -7908]));
// console.log(arrayPairSum([1, -1]));

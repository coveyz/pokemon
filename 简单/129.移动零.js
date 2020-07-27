const question = `给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。`

var moveZeroes = function(nums) {
  return nums.sort((a,b)=>b===0?-1:0)
};


console.log(moveZeroes([0, 0, 1]));

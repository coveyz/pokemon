var nextGreaterElement = function(nums1, nums2) {
  const next = new Map();
  const stack = [];
  for (let x of nums2) {
    // 单调栈 当前 x 是栈内所有元素的右侧第一个更大值
    while (stack.length && stack[stack.length - 1] < x) {
      next.set(stack.pop(), x);
    }
    stack.push(x);
  }

  // 栈内剩余元素没有更大值
  while (stack.length) next.set(stack.pop(), -1);

  // 返回nums1 对应的
  return nums1.map(x => next.get(x));
};

// 测试
console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4]));   // [3,-1]

const question = `给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
`;

const search = (nums, target) => {
	let low = 0;
	let height = nums.length - 1;
	while (low <= height) {
    let middle = Math.floor((height + low) / 2);
    let guess = nums[middle]
    if (guess > target) {
      height = middle - 1
    }
    else if (guess < target) {
      low = middle + 1
    }
    else {
      return middle
    }
  }
  return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], -1));

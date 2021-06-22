const question = `给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。`;

const findDuplicate = nums => {
	const numsObj = nums.reduce((acc, cur) => {
		if (acc[cur]) {
			return cur
		} else {
			acc[cur] = 1;
		}
		return acc;
  }, {});
  return numsObj
};

console.log(findDuplicate([3, 1, 3, 4, 2]));

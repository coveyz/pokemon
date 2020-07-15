const question = `给你一个整数数组 nums 。如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。返回好数对的数目。`;

const numIdenticalPairs = (nums) => {
	let number = 0;
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		for (let idx = index + 1; idx < nums.length; idx++) {
      const item = nums[idx];
      if (element === item) {
        number += 1
      }
		}
	}

	return number;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));

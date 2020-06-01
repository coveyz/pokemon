const question = `给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
以数组形式返回答案。`;

const smallerNumbersThanCurrent = (nums) => {
	var resultArr = [];
	var optionsNum = 0;
	for (let index = 0; index < nums.length; index++) {
		optionsNum = 0;
		const curElement = nums[index];
		for (let num = 0; num < nums.length; num++) {
			const elementItem = nums[num];
			if (curElement > elementItem) {
				optionsNum += 1;
			}
		}
		resultArr.push(optionsNum);
  }
  
  return resultArr
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6,5,4,8]))
console.log(smallerNumbersThanCurrent([7,7,7,7]))

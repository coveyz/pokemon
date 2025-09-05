const question = `给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。`;

const shuffle = (nums, n) => {
	var shuffleArr = [];
	var evenIndex = 0;
	var oddIndex = 1;
	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (n <= index) {
			// 奇数
			shuffleArr[oddIndex] = element;
			oddIndex += 2;
		} else {
			// 偶数
			shuffleArr[evenIndex] = element;
			evenIndex += 2;
		}
  }
  
  return shuffleArr
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1],4))
console.log(shuffle([1,1,2,2],2))

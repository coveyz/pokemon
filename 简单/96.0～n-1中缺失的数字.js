const question = `一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字`;

// 1.0
// const missingNumber = (nums) => {
//   if (!nums.includes(0)) return 0
//   var missNUmber = 0
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     missNUmber = element + 1
//     if (!nums.includes(missNUmber)) {
//       return missNUmber
//     }
//   }

//   return missNUmber
// };

// 2.0
const missingNumber = (nums) => {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (middle === nums[middle]) {
			left += 1;
		} else {
			right -= 1;
		}
	}

	return left;
};

console.log(missingNumber([0, 1, 3]));
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));
console.log(missingNumber([1, 2])); // 0
console.log(missingNumber([1])); // 0

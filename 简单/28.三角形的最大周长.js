const question = `给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
如果不能形成任何面积不为零的三角形，返回 0`


const largestPerimeter = (A) => {
  let switchJudge = true
  const sideLength = A.sort((a,b) => b - a)
  const perimeter = sideLength.reduce((acc,cur,index) => {
    if (cur < sideLength[index + 1] + sideLength [index + 2] && index !== sideLength.length - 2 && switchJudge) {
       acc = cur + sideLength[index+1] + sideLength[index + 2]
       switchJudge = false
       return acc
    } 
    return acc
  }, 0)
  return perimeter
}


/**
 ** 滑动窗口
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter2 = function (nums) {
	nums.sort((a, b) => a - b);
	const len = nums.length;
	let left = 0,
		right = 2,
		result = 0;
	while (right < len) {
		//* 两边 和 大于第三边
		const first = nums[left],
			second = nums[left + 1],
			third = nums[right];
		if (first + second > third) {
			result = Math.max(result, first + second + third);
			// console.log('xx', first + second + third, result);
		}
		left++;
		right++;
	}

	return result;
};

console.log(largestPerimeter([1,2,1]));

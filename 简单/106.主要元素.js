const question = `数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。`;

const majorityElement = (nums) => {
	const marjorityFrequency = nums.length / 2;
	const numberIndexObj = nums.reduce((acc, cur) => {
		if (acc[cur]) {
			acc[cur] += 1;
		} else {
			acc[cur] = 1;
		}
		return acc;
  }, {});
  
  for (const key in numberIndexObj) {
    if (numberIndexObj[key] > marjorityFrequency) {
      return key
    } 
  }

  return -1
};

console.log(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5]));
console.log(majorityElement([3,2]));
console.log(majorityElement([2,2,1,1,1,2,2]));

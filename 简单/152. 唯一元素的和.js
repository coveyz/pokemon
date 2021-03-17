const sumOfUnique = (nums) => {
	const numberObj = nums.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		return acc;
	}, {});

	let count = 0;

	for (const key in numberObj) {
		count = numberObj[key] === 1 ? count + Number(key) : count;
	}
	return count;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1,2,3,4,5]));

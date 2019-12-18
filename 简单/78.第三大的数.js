const question = `给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。`;

const thirdMax = nums => {
	let arrSort = nums.sort((a, b) => b - a);
	arrSort = [...new Set(arrSort)];
	if (arrSort.length < 3) return arrSort[0];
	return arrSort[2];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 1, 2]));


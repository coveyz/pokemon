const question = `设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。`;

const smallestK = (arr, k) => {
	const newSortArr = arr.sort((a, b) => a - b);
	return newSortArr.slice(0, k);
};

console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4));

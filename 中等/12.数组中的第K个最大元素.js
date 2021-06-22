const question = `在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。`;

const findKthLargest = (nums, k) => {
	const afterSortOfArr = nums.sort((a, b) => b - a);

	return afterSortOfArr[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));

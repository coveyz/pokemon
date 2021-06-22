const kthSmallest = (matrix, k) => {
	const mergeArr = matrix
		.reduce((acc, cur) => {
			acc.push(...cur);
			return acc;
		}, [])
		.sort((a, b) => a - b);

	return mergeArr[k - 1];
};

console.log(
	kthSmallest(
		[
			[1, 5, 9],
			[10, 11, 13],
			[12, 13, 15],
		],
		8
	)
);

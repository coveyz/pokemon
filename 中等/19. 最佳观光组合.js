const question = `给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
返回一对观光景点能取得的最高分。`;

var maxScoreSightseeingPair = function (A) {
	let optimum = 0;
	for (let index = 0; index < A.length; index++) {
		const element = A[index];
		for (let idx = index + 1; idx < A.length; idx++) {
			const item = A[idx];
			const total = element + item + index - idx;
			if (total > optimum) {
				optimum = total;
			}
		}
	}
	return optimum;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));

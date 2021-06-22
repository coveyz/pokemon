const question = ` n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。
每 3 个士兵可以组成一个作战单位，分组规则如下：
从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n
请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分`

var numTeams = function (rating) {
	let qq = 0;
	for (let index = 0; index < rating.length; index++) {
		for (let idx = index + 1; idx < rating.length; idx++) {
			for (let number = idx + 1; number < rating.length; number++) {
				if (
					(rating[index] < rating[idx] && rating[idx] < rating[number]) ||
					(rating[index] > rating[idx] && rating[idx] > rating[number])
				) {
					qq += 1;
        }
			}
		}
	}

	return qq;
};

console.log(numTeams([2, 5, 3, 4, 1]));
console.log(numTeams([2,1,3]))
console.log(numTeams([1,2,3,4]))

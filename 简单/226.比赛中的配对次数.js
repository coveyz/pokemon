const question = `
给你一个整数 n ，表示比赛中的队伍数。比赛遵循一种独特的赛制：
如果当前队伍数是 偶数 ，那么每支队伍都会与另一支队伍配对。总共进行 n / 2 场比赛，且产生 n / 2 支队伍进入下一轮。
如果当前队伍数为 奇数 ，那么将会随机轮空并晋级一支队伍，其余的队伍配对。总共进行 (n - 1) / 2 场比赛，且产生 (n - 1) / 2 + 1 支队伍进入下一轮。
返回在比赛中进行的配对次数，直到决出获胜队伍为止。
`;

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n, match = 0) {
	if (n === 1) {
		return match;
	}

	//* 奇数
	if (n % 2) {
		count = (n - 1) / 2;
		n = (n - 1) / 2 + 1;
	}
	//* 偶数
	else {
		count = n / 2;
		n = n / 2;
	}
	match = count + match;
	// console.log('n=>', n, 'count=>', count, 'match=>', match);
	return numberOfMatches(n, match);
};

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));

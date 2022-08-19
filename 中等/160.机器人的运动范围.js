const question = `
地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
`;

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
	const queue = [[0, 0]],
		isVisted = {};
	let res = 0,
		pos = 1;

	while (pos) {
		while (pos--) {
			const [i, j] = queue.shift();
			const key = `${i}-${j}`;
			const sum = ('' + i + j).split('').reduce((acc, cur) => acc + Number(cur), 0);
			if (i >= m || j >= n || isVisted[key] || sum > k) continue;

			res++;
			isVisted[key] = true;
			queue.push([i + 1, j], [i, j + 1]);
		}
		pos = queue.length;
	}

	return res;
};

const m = 2,
	n = 3,
	k = 1;

console.log(movingCount(m, n, k));

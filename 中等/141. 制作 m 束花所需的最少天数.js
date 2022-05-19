const question = ` 
给你一个整数数组 bloomDay，以及两个整数 m 和 k 。
现需要制作 m 束花。制作花束时，需要使用花园中 相邻的 k 朵花 。
花园中有 n 朵花，第 i 朵花会在 bloomDay[i] 时盛开，恰好 可以用于 一束 花中。
请你返回从花园中摘 m 束花需要等待的最少的天数。如果不能摘到 m 束花则返回 -1 。
`;

/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
	if (m > bloomDay.length / k) return -1;
	let low = Math.min(...bloomDay),
		height = Math.max(...bloomDay);

	const canMake = (blooDay, days, m, k) => {
		let bouquets = 0,
			flowers = 0;
		const len = blooDay.length;
		for (let index = 0; index < len && bouquets < m; index++) {
			if (blooDay[index] <= days) {
				flowers++;
				if (flowers === k) {
					bouquets++;
					flowers = 0;
				}
			} else {
				flowers = 0;
			}
		}
		return bouquets >= m;
	};

	while (low < height) {
		const days = Math.floor((height - low) / 2) + low;
		if (canMake(bloomDay, days, m, k)) {
			height = days;
		} else {
			low = days + 1;
		}
	}

	return low;
};

const bloomDay = [1, 10, 3, 10, 2],
	m = 3,
	k = 1;

console.log(minDays(bloomDay, m, k));

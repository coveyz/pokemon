const question = `
在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。Rick 有 n 个空的篮子，第 i 个篮子的位置在 position[i] ，Morty 想把 m 个球放到这些篮子里，使得任意两球间 最小磁力 最大。
已知两个球如果分别位于 x 和 y ，那么它们之间的磁力为 |x - y| 。
给你一个整数数组 position 和一个整数 m ，请你返回最大化的最小磁力。
`;

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
	position.sort((a, b) => a - b);

	const check = (x, position, m) => {
		let pre = position[0],
			cnt = 1;
		for (let index = 0; index < position.length; index++) {
			const element = position[index];
			if (element - pre >= x) {
				pre = element;
				cnt++;
			}
		}

		return cnt >= m;
	};

	let left = 0,
		right = position[position.length - 1] - position[0],
		ans = -1;

	while (left <= right) {
		const middle = (left + right) >> 1;
		if (check(middle, position, m)) {
			ans = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return ans;
};

const position = [1, 2, 3, 4, 7],
	m = 3;
// const position = [5,4,3,2,1,1000000000], m = 2

console.log(maxDistance(position, m));

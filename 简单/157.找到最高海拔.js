const question = `
有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。
给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。
`
// const largestAltitude = (gain) => {
// 	return gain
// 		.reduce(
// 			(acc, cur) => {
// 				const lastItem = acc[acc.length - 1];
// 				acc.push(lastItem + cur);
// 				return acc;
// 			},
// 			[0]
// 		)
// 		.reduce((acc, cur) => {
// 			acc = acc > cur ? acc : cur;
// 			return acc;
// 		}, 0);
// };

const largestAltitude = (gain) => {
	let lastItem = 0;
	return gain.reduce((acc, cur) => {
		lastItem = lastItem + cur;
		acc = acc > lastItem ? acc : lastItem;
		return acc;
	}, 0);
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

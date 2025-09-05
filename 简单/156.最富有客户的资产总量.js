const question = `
给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。
客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。
`;
// const maximumWealth = (accounts) => {
// 	return accounts
// 		.reduce((acc, cur) => {
// 			const curAccount = cur.reduce((total, item) => {
// 				total += item;
// 				return total;
// 			}, 0);
// 			acc.push(curAccount);
// 			return acc;
// 		}, [])
// 		.reduce((MaxNumber, cur) => {
// 			MaxNumber = MaxNumber > cur ? MaxNumber : cur;
// 			return MaxNumber;
// 		}, 0);
// };

const maximumWealth = (accounts) => {
	return accounts.reduce((acc, cur) => {
		const curAccount = cur.reduce((total, item) => {
			total += item;
			return total;
		}, 0);
		// acc.push(curAccount);

		acc = acc > curAccount ? acc : curAccount;
		return acc;
	}, 0);
};

console.log(
	maximumWealth([
		[1, 2, 3],
		[3, 2, 1],
	])
);

console.log(
	maximumWealth([
		[1, 5],
		[7, 3],
		[3, 5],
	])
);

console.log(
	maximumWealth([
		[2, 8, 7],
		[7, 1, 3],
		[1, 9, 5],
	])
);

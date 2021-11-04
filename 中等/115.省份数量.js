const question = `
有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
返回矩阵中 省份 的数量。
`;

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	const provinces = isConnected.length;
	const visted = new Set();
	let circles = 0;
	const queue = [];

	for (let index = 0; index < provinces; index++) {
		//* 如果该城市没有被访问
		if (!visted.has(index)) {
			queue.push(index);

			while (queue.length) {
				const item = queue.shift(); //* 城市中的每一个节点
				//* 将当前节点 加入 访问名单当中
				visted.add(item);
				console.log('item=>', item, 'visted=>', visted);

				for (let key = 0; key < provinces; key++) {
					if (isConnected[item][key] === 1 && !visted.has(key)) {
						queue.push(key);
						console.log('cur=>', isConnected[item][key], 'postion', item, key, 'visted=>', visted, 'queue=>', queue);
					}
				}
			}
			circles += 1;
		}
	}

	return circles;
};

console.log(
	findCircleNum([
		[1, 0, 0, 1],
		[0, 1, 1, 0],
		[0, 1, 1, 1],
		[1, 0, 1, 1],
	])
);
// console.log(
// 	findCircleNum([
// 		[1, 1, 0],
// 		[1, 1, 0],
// 		[0, 0, 1],
// 	])
// );

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

const question = `
给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。
`;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	const res = [],
		queue = [[root, 0]];

	while (queue.length) {
		const [item, level] = queue.pop();

		if (!res[level]) {
			res[level] = [];
		}

		res[level].push(item.val);

		item.left && queue.push([item.left, level + 1]);
		item.right && queue.push([item.right, level + 1]);
	}

	return res.reduce((acc, cur) => {
		const total = cur.reduce((acc, cur) => (acc += cur), 0);

		acc.push(total / cur.length);

		return acc;
	}, []);
};

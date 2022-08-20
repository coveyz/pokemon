const question = `
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
叶子节点 是指没有子节点的节点。
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
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
	if (!root) return [];
	const paths = [root.val], // 储存根节点
		res = [];
	// 深度优先
	let preOrder = (node) => {
		// 先左
		if (node.left) {
			paths.push(node.left.val);
			preOrder(node.left);
			// 遍历完 甭管行不行都删除
			paths.pop();
		}
		if (node.right) {
			paths.push(node.right.val);
			preOrder(node.right);
			paths.pop();
		}
		// 到达叶子节点 结算路径和
		if (!node.left && !node.right) {
			let sum = paths.reduce((acc, cur) => acc + cur, 0);
			if (sum === target) {
				res.push(paths.slice());
			}
		}
	};

	preOrder(root);

	return res;
};

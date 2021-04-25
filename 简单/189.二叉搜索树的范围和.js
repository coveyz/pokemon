const question = `
给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
`;
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
	const queue = [];
	const arr = [];
	queue.push(root);

	while (queue.length) {
		const node = queue.shift();
		if (node.val > L && node.val < R) {
			arr.push(node.val);
		}

		node.left && queue.push(node.left);
		node.right && queue.push(node.right);
	}

	return arr.reduce((acc, cur) => acc + cur, 0);
};

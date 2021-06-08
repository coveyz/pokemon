const question = `
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
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
var rightSideView = function (root) {
	if (!root) return [];

	const res = [];

	const dfs = (tree, step) => {
		if (tree) {
			if (res.length === step) {
				res.push(tree.val);
			}

			dfs(tree.right, step + 1);
			dfs(tree.left, step + 1);
		}
	};

	dfs(root, 0);

	return res;
};

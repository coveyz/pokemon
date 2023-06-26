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
 * @return {number}
 */
var maxDepth = function (root) {
	let curLevel = 0;

	const dfs = (node, level) => {
		if (!node) return;
		if (curLevel !== level) curLevel++;

		node.left && dfs(node.left, level + 1);
		node.right && dfs(node.right, level + 1);
	};

	dfs(root, 0);

	return curLevel;
};

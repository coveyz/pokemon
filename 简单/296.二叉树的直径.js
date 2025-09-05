const question = `
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
	if (root === null || (root.left === null && root.right === null)) return 0;
	let res = 0;

	const dfs = (root) => {
		if (root === null) return 0;
		let left = dfs(root.left),
			right = dfs(root.right);
		res = Math.max(res, left + right + 1);

		return Math.max(left, right) + 1;
	};

	dfs(root);

	return res - 1;
};

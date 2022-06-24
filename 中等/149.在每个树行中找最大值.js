const question = `
给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
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
var largestValues = function (root) {
	if (!root) return [];
	const result = [];

	const dfs = (res, root, curHeight) => {
		if (curHeight === res.length) {
			res.push(root.val);
		} else {
			res[curHeight] = Math.max(res[curHeight], root.val);
		}

		if (root.left) {
			dfs(res, root.left, curHeight + 1);
		}
		if (root.right) {
			dfs(res, root.right, curHeight + 1);
		}
	};

	dfs(result, root, 0);

	return result;
};
